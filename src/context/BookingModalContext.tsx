// src/context/BookingModalContext.tsx
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type BookingContextType = {
  isOpen: boolean;
  bookingUrl: string | null;
  openBooking: (url?: string) => void; // ✅ allow passing URL
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingContextType | null>(null);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);

  const openBooking = useCallback((url?: string) => {
    if (url) setBookingUrl(url);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setBookingUrl(null);
  }, []);

  const value = useMemo(
    () => ({ isOpen, bookingUrl, openBooking, closeBooking }),
    [isOpen, bookingUrl, openBooking, closeBooking]
  );

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
