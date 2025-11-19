// src/components/Hero.tsx
import { motion } from "framer-motion";


type HeroProps = {
  /** Path to the hero background image */
  imageSrc?: string;
  /** Main heading text */
  title?: string;
  /** Supporting description text */
  subtitle?: string;
  /** CTA button text and link */
  ctaText?: string;
  ctaLink?: string;
};

export default function Hero({
  imageSrc = "/media/hero-desktop.JPG", // ✅ your image in public/media/
  title = "Elevate Your Game",
  subtitle = "Master your swing, sharpen your short game, and lower your score.",
  location = "- Albury / Wodonga -"
}: HeroProps) {
  return (
    <section
      className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-center bg-black overflow-hidden"
      id="hero"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl px-6"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1  className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
          {subtitle}
        </p>
        <p className="text-sm text-gray-200 mt-3 drop-shadow-md">
          {location}
        </p>

      </motion.div>
    </section>
  );
}
