import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type Ctx = {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<Ctx | null>(null);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ isOpen, openBooking, closeBooking }), [isOpen, openBooking, closeBooking]);
  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
