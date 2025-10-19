// src/components/Hero.tsx
import { motion } from "framer-motion";
import { useBookingModal } from "../context/BookingModalContext";

export default function Hero() {
  const { openBooking } = useBookingModal();

  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden text-center bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        src="/golf-hero.MP4"
        autoPlay
        loop
        muted
        playsInline
        poster="/golf-hero-fallback.jpg"
      />

      {/* Gradient + Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Elevate Your Game
        </h1>

        <p
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Master your swing, sharpen your short game, and lower your score with
          professional golf coaching from Luke Porritt — PGA qualified coach
          based in Albury/Wodonga.
        </p>

        <motion.button
          onClick={() => openBooking()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 rounded-md bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-gray-950 transition-all shadow-lg"
        >
          Book a Lesson
        </motion.button>
      </motion.div>
    </section>
  );
}
