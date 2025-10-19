import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-50 to-white text-gray-800 py-24 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-md">
            <img
              src="/luke-portrait.jpg"
              alt="Luke Porritt - PGA Golf Coach"
              className="rounded-2xl shadow-xl w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Meet Luke Porritt
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Based in <strong>Albury/Wodonga</strong>, Luke Porritt is a
            <strong> PGA-qualified golf coach</strong> dedicated to helping players
            of all levels improve their game. With years of experience both as
            a competitor and instructor, Luke blends technical precision with
            clear, practical coaching.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Using modern tools — including <em>video swing analysis</em> and
            <em> performance tracking</em> — Luke ensures every player leaves
            each session with measurable progress and renewed confidence.
          </p>

          <a
            href="#"
            className="btn-primary text-lg font-semibold shadow-md"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
