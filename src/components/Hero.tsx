import { motion } from "framer-motion";
import { useBookingModal } from "../context/BookingModalContext";

type HeroProps = {
  /** Path to hero background video */
  videoSrc?: string;
  /** Optional fallback image */
  fallbackImage?: string;
  /** Main heading text */
  title?: string;
  /** Supporting description text */
  subtitle?: string;
  /** CTA button text */
  ctaText?: string;
};

export default function Hero({
  videoSrc = "/golf-hero.MP4",
  fallbackImage = "/golf-hero-fallback.jpg",
  title = "Elevate Your Game",
  subtitle = "Master your swing, sharpen your short game, and lower your score.",
  ctaText = "Book a Lesson",
}: HeroProps) {
  const { openBooking } = useBookingModal();

  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden text-center bg-black">
      {/* Background video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImage}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl px-6"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 drop-shadow-md">
          {subtitle}
        </p>

        {ctaText && (
          <button
            onClick={openBooking}
            className="inline-block px-8 py-3 rounded-md bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-gray-950 transition"
          >
            {ctaText}
          </button>
        )}
      </motion.div>
    </section>
  );
}
