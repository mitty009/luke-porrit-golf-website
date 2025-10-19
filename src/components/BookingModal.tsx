import { useEffect, useRef } from "react";
import { useBookingModal } from "../context/BookingModalContext";

const SQUARE_SITE = import.meta.env.VITE_SQUARE_SITE_URL || "https://luke-porritt.square.site/";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBookingModal();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeBooking();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeBooking();
      }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">Book a Lesson</h3>
          <button
            onClick={closeBooking}
            aria-label="Close booking"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-black/5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Iframe */}
        <div className="w-full h-[70vh] md:h-[75vh]">
          <iframe
            title="Square bookings"
            src={SQUARE_SITE}
            className="w-full h-full"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
