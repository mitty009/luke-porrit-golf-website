// src/components/Hero.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useBookingModal } from "../context/BookingModalContext";
import { DEFAULT_BOOKING_URL } from "../config/booking";

type HeroProps = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  locationTagline?: string;
};

const VIDEO_ID = "mKysd7txJSM";
const START_SECONDS = 500;

export default function Hero({
  imageSrc = "/media/hero-desktop.JPG",
  title = "Elevate Your Game",
  subtitle = "Master your swing, sharpen your short game, and lower your score.",
  locationTagline = "Thurgoona Country Club Resort · Albury / Wodonga",
}: HeroProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
  const [videoReady, setVideoReady] = useState(false);
  const { openBooking } = useBookingModal();

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[68vh]          /* a bit shorter on mobile */
        sm:min-h-[72vh]
        md:min-h-screen
        w-full
        flex items-center justify-center
        text-center text-white
        overflow-hidden
        bg-black
      "
    >
      {/* Fallback photo – visible until the video is actually playing */}
      <div
        className={`
          absolute inset-0 z-0
          transition-opacity duration-700
          ${videoReady ? "opacity-0" : "opacity-100"}
        `}
      >
        <img
          src={imageSrc}
          alt="Luke Porritt Golf hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background video layer */}
      <div
        className={`
          absolute inset-0 z-0 overflow-hidden
          transition-opacity duration-700
          ${videoReady ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Oversized so it covers all aspect ratios */}
        <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 md:w-[130vw] md:h-[130vh]">
          <ReactPlayer
            src={videoUrl}
            playing
            muted
            loop
            controls={false}
            playsInline
            width="100%"
            height="100%"
            config={{
              youtube: {
                start: START_SECONDS,
                rel: 0,
                disablekb: 1,
                fs: 0,
              },
            }}
            // Fade in ONLY once the video is actually playing
            onPlay={() => {
              if (!videoReady) {
                setVideoReady(true);
              }
            }}
            style={{
              pointerEvents: "none", // behaves like a background
            }}
          />
        </div>
      </div>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />

      {/* Hero text + mobile CTA */}
      <motion.div
        className="
          relative z-20
          max-w-[90%] sm:max-w-2xl
          px-4 sm:px-6
          pt-20 pb-10           /* tighter on mobile */
          md:pt-28 md:pb-20
        "
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          className="
            text-3xl
            xs:text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            text-white
            mb-3 md:mb-5
            leading-tight
            drop-shadow-lg
          "
          style={{
            fontFamily:
              "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md">
          {subtitle}
        </p>

        <p className="mt-4 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-gray-300 drop-shadow-md">
          {locationTagline}
        </p>

        {/* Mobile-only Book button in the hero */}
        <div className="mt-6 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => openBooking(DEFAULT_BOOKING_URL)}
            className="
              inline-flex items-center justify-center
              px-6 py-2.5
              rounded-full
              bg-brand-500
              text-sm font-semibold text-white
              shadow-md
              hover:bg-brand-600
              focus:outline-none
              focus:ring-2 focus:ring-brand-400/70
              focus:ring-offset-2 focus:ring-offset-black
              transition
            "
          >
            Book a Lesson
          </button>
        </div>
      </motion.div>
    </section>
  );
}
