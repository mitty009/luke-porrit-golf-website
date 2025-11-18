// src/components/AboutSection.tsx
import { motion } from "framer-motion";

export default function AboutSection() {
  const images = [
    { src: "/media/IMG_0198.jpg", alt: "Luke Porritt golf swing" },
    { src: "/media/IMG_6196.JPG", alt: "Luke Porritt putting on green" },
    { src: "/media/IMG_1239.JPG", alt: "Luke Porritt practice session" },
    { src: "/media/RenderedImage.JPEG", alt: "Luke Porritt PGA award" },
    // { src: "/media/IMG_3948.jpg", alt: "Luke Porritt driving range coaching" },
    // { src: "/media/IMG_7700.jpg", alt: "Luke Porritt golf event" },
  ];

  return (
    <section
      id="about"
      className="relative bg-gray-50 text-gray-900 py-24 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Animated Image Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md group aspect-[4/3]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 ease-in-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* Right — Biography */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Meet Luke Porritt
          </h2>

          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Luke Porritt is a qualified <strong>PGA Professional</strong> and
              award-winning golf coach based in Victoria, Australia. Before
              pursuing his passion for golf full-time, Luke served 10 years as a
              <strong> NSW Police Officer</strong>, developing many skills that
              now underpin his coaching and playing career.
            </p>

            <p>
              Since joining the PGA pathway, Luke has rapidly established
              himself as one of Australia’s leading emerging professionals,
              earning back-to-back{" "}
              <strong>Victorian PGA Associate of the Year</strong> awards in 2024
              and 2025, alongside five PGA Associate wins and two 3rd-place
              finishes at the NSW/ACT State Associate Championships at Tura
              Beach.
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

          <div className="mt-8">
            <a
              href="#book"
              className="inline-block px-8 py-3 rounded-md bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 transition"
            >
              Book a Lesson
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
