// src/context/BookingModalContext.tsx
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_BOOKING_URL } from "../config/booking";

type BookingModalContextValue = {
  isOpen: boolean;
  bookingUrl: string;
  openBooking: (url?: string) => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | undefined>(
  undefined
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState<string>(
    DEFAULT_BOOKING_URL || "https://luke-porritt.square.site/"
  );

  const openBooking = (url?: string) => {
    setBookingUrl(url || DEFAULT_BOOKING_URL || "https://luke-porritt.square.site/");
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider
      value={{ isOpen, bookingUrl, openBooking, closeBooking }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal(): BookingModalContextValue {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
