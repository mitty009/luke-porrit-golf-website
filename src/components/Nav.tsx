// src/components/Nav.tsx
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useBookingModal } from "../context/BookingModalContext";

type Item = { href: string; label: string };
const ITEMS: Item[] = [
  { href: "#about", label: "About Me" },
  { href: "#coaching", label: "Coaching" },
  { href: "#record", label: "Track Progress" },
];

function scrollToHash(hash: string) {
  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) return;
  const offset = 72; // sticky header height + margin
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { openBooking } = useBookingModal();

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative px-3 py-2 text-sm font-medium transition-colors text-gray-300 hover:text-white";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur bg-gray-950/85 ${
        elevated ? "shadow-[0_8px_24px_rgba(0,0,0,0.35)]" : ""
      } border-b border-white/5`}
    >
      <nav className="container-max h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="h-10 md:h-12 flex items-center pt-2">
            <Logo
              heightClass="h-40 md:h-40"
              className="group-hover:opacity-90 transition-opacity"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className={linkClass}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(it.href);
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li className="pl-2">
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-brand-500 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-gray-950 text-sm font-semibold"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/5"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/5 transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-max py-3 space-y-1">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="block w-full px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/5"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  scrollToHash(it.href);
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <button
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="block w-full text-center rounded-md px-4 py-2 bg-brand-500 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-gray-950 text-sm font-semibold"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
