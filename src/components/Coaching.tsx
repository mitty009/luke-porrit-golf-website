// src/components/Coaching.tsx
import { motion } from "framer-motion";
import { useBookingModal } from "../context/BookingModalContext";

export default function Coaching() {
  const { openBooking } = useBookingModal();

  const lessonGroups = [
    {
      heading: "Current Golfers",
      desc: "For returning clients continuing their progress with Luke’s structured coaching program.",
      lessons: [
        {
          title: "Returning Session (30 mins)",
          desc: "Returning client booking a 30-minute golf lesson.",
          price: "$50.00",
          duration: "30 mins",
          url: "https://luke-porritt.square.site/product/golf-lesson-returning-session-30-mins/123",
        },
        {
          title: "Returning Session (60 mins)",
          desc: "Returning client booking a 60-minute golf lesson.",
          price: "$90.00",
          duration: "1 hr",
          url: "https://luke-porritt.square.site/product/golf-lesson-returning-session-60-mins/123",
        },
      ],
    },
    {
      heading: "Initial Sessions",
      desc: "For new clients — start your journey with a detailed initial assessment.",
      lessons: [
        {
          title: "Initial Session (30 mins)",
          desc: "New client booking an initial 30-minute golf lesson.",
          price: "$50.00",
          duration: "30 mins",
          url: "https://luke-porritt.square.site/product/golf-lesson-initial-session-30-mins/123",
        },
        {
          title: "Initial Session (60 mins)",
          desc: "New client booking an initial 60-minute golf lesson.",
          price: "$90.00",
          duration: "1 hr",
          url: "https://luke-porritt.square.site/product/golf-lesson-initial-session-60-mins/123",
        },
      ],
    },
    {
      heading: "Junior Coaching",
      desc: "Tailored lessons for young golfers focusing on fundamentals, fun, and improvement.",
      lessons: [
        {
          title: "Junior Lesson",
          desc: "Private coaching session for junior golfers focused on skill development and enjoyment.",
          price: "$60.00",
          duration: "45 mins",
          url: "https://luke-porritt.square.site/product/junior-lesson/123",
        },
      ],
    },
  ];

  return (
    <section
      id="coaching"
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-24 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Coaching Programs
        </motion.h2>

        <p
          className="text-gray-300 text-lg max-w-3xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Whether you’re a new student or a returning golfer, Luke offers flexible lesson options designed to fit your schedule and skill level.
        </p>
      </div>

      {/* Lesson Groups */}
      {lessonGroups.map((group, i) => (
        <motion.div
          key={group.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h3
            className="text-2xl md:text-3xl font-semibold text-brand-400 mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {group.heading}
          </h3>
          <p className="text-gray-400 mb-8">{group.desc}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.lessons.map((lesson, j) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.1 }}
                className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-brand-400/40 transition-all"
              >
                <div>
                  <h4
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {lesson.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{lesson.desc}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300 border-t border-white/10 pt-4 mt-auto">
                  <div>
                    <span className="font-medium">{lesson.price}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span>{lesson.duration}</span>
                  </div>
                  <button
                    onClick={() => openBooking(lesson.url)}
                    className="px-4 py-2 rounded-md bg-brand-500 text-white text-sm font-semibold hover:bg-brand-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
