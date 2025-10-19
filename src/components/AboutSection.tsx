// src/components/AboutSection.tsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-800 py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/luke-portrait.jpg"
            alt="Luke Porritt Golf Coach"
            className="rounded-2xl shadow-lg max-h-[480px] w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Meet Luke Porritt
          </h1>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Based in <strong>Albury/Wodonga</strong>, Luke Porritt is a
            PGA-qualified golf coach dedicated to helping players of all levels
            improve their game. With years of competitive and coaching
            experience, Luke blends technical precision with clear, practical
            instruction that helps golfers perform their best on the course.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            His approach combines traditional fundamentals with modern
            technology — including video swing analysis and performance
            tracking — ensuring every player leaves each session with measurable
            progress and renewed confidence.
          </p>

          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#book");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="inline-block mt-4 px-8 py-3 rounded-md bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 transition"
          >
            Book a Lesson
          </a>
        </motion.div>
      </div>
    </section>
  );
}
