// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import { DEFAULT_BOOKING_URL } from "../config/booking";
import { useBookingModal } from "../context/BookingModalContext";


const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "coaching", label: "Coaching" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { openBooking } = useBookingModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // sticky nav height offset
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled
          ? "bg-gray-950/90 backdrop-blur border-b border-white/10 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand — scrolls to hero on click */}
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/luke-porritt-logo.png"
            alt="Luke Porritt Golf"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-18 opacity-100" : "h-18 opacity-25"
              }`}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-gray-200">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="hover:text-brand-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openBooking(DEFAULT_BOOKING_URL)}
            className="ml-4 px-4 py-2 rounded-full bg-brand-500 text-sm font-semibold text-white hover:bg-brand-600 transition-colors shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-white/10 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-sm text-gray-200 hover:text-brand-400"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openBooking(DEFAULT_BOOKING_URL);
              }}
              className="mt-2 w-full px-4 py-2 rounded-full bg-brand-500 text-sm font-semibold text-white hover:bg-brand-600 transition-colors shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
