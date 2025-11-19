// src/components/Hero.tsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

type HeroProps = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  locationTagline?: string;
};

const VIDEO_ID = "mKysd7txJSM";

export default function Hero({
  imageSrc = "/media/hero-desktop.JPG",
  title = "Elevate Your Game",
  subtitle = "Master your swing, sharpen your short game, and lower your score.",
  locationTagline = "Thurgoona Country Club Resort · Albury / Wodonga",
}: HeroProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
  const [videoReady, setVideoReady] = useState(false);
  const playerRef = useRef<any>(null); // keep TS relaxed here

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-black"
    >
      {/* Fallback image */}
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
        {/* Oversized so the 16:9 video fully covers the viewport on all aspect ratios */}
        <div className="absolute top-1/2 left-1/2 w-[130vw] h-[130vh] -translate-x-1/2 -translate-y-1/2">
          <ReactPlayer
            ref={playerRef}
            src={videoUrl}
            playing
            muted
            loop
            controls={false}
            playsInline          // ✅ camelCase prop
            width="100%"
            height="100%"
            onReady={() => {
              // Jump to 20 seconds once the player is ready (adjust as you like)
              if (playerRef.current && typeof playerRef.current.seekTo === "function") {
                try {
                  playerRef.current.seekTo(20, "seconds");
                } catch {
                  // ignore if seek fails – video will still play
                }
              }
              // Small delay so YouTube UI settles before we fade it in
              setTimeout(() => setVideoReady(true), 400);
            }}
            style={{
              pointerEvents: "none", // behave like a background, not an interactive player
            }}
          />
        </div>
      </div>

      {/* Dark overlay above image + video */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Hero text content */}
      <motion.div
        className="relative z-20 max-w-2xl px-6 pb-16 pt-24 md:pt-32"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          style={{
            fontFamily:
              "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
          {subtitle}
        </p>

        <p className="mt-4 text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-gray-300 drop-shadow-md">
          {locationTagline}
        </p>
      </motion.div>
    </section>
  );
}
