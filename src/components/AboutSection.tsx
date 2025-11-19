// src/components/AboutSection.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function AboutSection() {
  const images = [
    { src: "/media/IMG_0198.jpg", alt: "Luke Porritt golf swing" },
    { src: "/media/IMG_6196.JPG", alt: "Luke Porritt putting on green" },
    { src: "/media/IMG_1239.JPG", alt: "Luke Porritt practice session" },
    { src: "/media/RenderedImage.JPEG", alt: "Luke Porritt PGA award" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Close lightbox on ESC
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 px-6 pt-16 md:px-10 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Left — Animated Image Grid (2/5 on desktop, second on mobile) */}
        <motion.div
          className="order-2 md:order-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {images.map((img, i) => (
            <motion.button
              type="button"
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3] border border-white/5 bg-gray-900/40"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500 ease-in-out" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-gray-100 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                View photo
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Right — Biography (3/5 on desktop, first on mobile) */}
        <motion.div
          className="order-1 md:order-2 md:col-span-3 bg-gray-900/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{
              fontFamily:
                "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Meet Luke Porritt
          </h2>

          <p className="text-sm uppercase tracking-[0.18em] mb-6 text-brand-400">
            PGA Professional · Coach · Tournament Player
          </p>

          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              Luke Porritt is a qualified <strong>PGA Professional</strong> and
              award-winning golf coach based in Victoria, Australia. Before
              pursuing his passion for golf full-time, Luke served 10 years as a
              <strong> NSW Police Officer</strong>, developing the discipline,
              communication and leadership skills that now underpin his coaching
              and playing career.
            </p>

            <p>
              Since joining the PGA pathway, Luke has rapidly established
              himself as one of Australia’s leading emerging professionals,
              earning back-to-back{" "}
              <strong>Victorian PGA Associate of the Year</strong> awards in
              2024 and 2025, alongside five PGA Associate wins and two
              third-place finishes at the NSW/ACT State Associate Championships
              at Tura Beach.
            </p>

            <p>
              Luke’s playing credentials include qualification for the{" "}
              <strong>2023 Victorian PGA Championship</strong> and graduation
              from the PGA Membership Pathway Program ranked 7th in scoring
              average, securing{" "}
              <strong>PGA Tour of Australasia Tournament Membership</strong> for
              the 2025–2026 season, where he intends to compete in as many
              events as possible.
            </p>

            <p>
              As a coach, Luke combines{" "}
              <strong>Full Swing launch monitor technology</strong> and
              high-definition video analysis to deliver precise, data-driven
              feedback that accelerates player development. His coaching
              philosophy centres on helping golfers of all levels improve
              performance, build confidence, and enhance their enjoyment of the
              game.
            </p>

            <p>
              Whether guiding aspiring juniors, elite amateurs, or recreational
              players, Luke’s passion for both the sport and the people who play
              it shines through every session.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox for images */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] bg-black/60 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={closeImage}
                aria-label="Close image"
                className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-black/70 text-gray-100 hover:bg-black/90 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionDivider />
    </section>
  );
}
