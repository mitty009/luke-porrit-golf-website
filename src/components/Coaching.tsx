// src/sections/Coaching.tsx
import { motion } from "framer-motion";
import { useBookingModal } from "../context/BookingModalContext";
import { BOOKING_SERVICES } from "../config/booking";
import SectionDivider from "./SectionDivider";

export default function Coaching() {
  const { openBooking } = useBookingModal();

  const lessonGroups = [
    {
      heading: "Initial Sessions",
      desc: "For new clients — start your journey with a detailed initial assessment.",
      lessons: [
        {
          title: "Initial Session (30 mins)",
          desc: "New client booking an initial 30-minute golf lesson.",
          price: "$50.00",
          duration: "30 mins",
          url: BOOKING_SERVICES.initial30,
        },
        {
          title: "Initial Session (60 mins)",
          desc: "New client booking an initial 60-minute golf lesson.",
          price: "$90.00",
          duration: "1 hr",
          url: BOOKING_SERVICES.initial60,
        },
      ],
    },
    {
      heading: "Returning Golfers",
      desc: "For returning clients continuing their progress with Luke’s structured coaching program.",
      lessons: [
        {
          title: "Returning Session (30 mins)",
          desc: "Returning client booking a 30-minute golf lesson.",
          price: "$50.00",
          duration: "30 mins",
          url: BOOKING_SERVICES.returning30,
        },
        {
          title: "Returning Session (60 mins)",
          desc: "Returning client booking a 60-minute golf lesson.",
          price: "$90.00",
          duration: "1 hr",
          url: BOOKING_SERVICES.returning60,
        },
      ],
    },
    {
      heading: "Junior Coaching",
      desc: "Tailored lessons for young golfers focusing on fundamentals, fun, and improvement.",
      lessons: [
        {
          title: "Junior Lesson (45 mins)",
          desc: "Private coaching session for junior golfers focused on skill development and enjoyment.",
          price: "$60.00",
          duration: "45 mins",
          url: BOOKING_SERVICES.junior45,
        },
      ],
    },
  ];

  return (
    <section
      id="coaching"

      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 pt-10 px-6 md:px-10 lg:px-20"
    >
      {/* Header */}
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
          Whether you’re a new student or a returning golfer, Luke offers
          flexible lesson options designed to fit your schedule and skill level.
        </p>
      </div>

      {/* Lesson Groups */}
      {lessonGroups.map((group, i) => {
        const lessonsCount = group.lessons.length;

        // Column layout & max width based on how many lessons are in this group
        const gridColsClass =
          lessonsCount === 1
            ? "grid-cols-1 max-w-md"
            : lessonsCount === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl";

        return (
          <motion.div
            key={group.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="max-w-6xl mx-auto mb-14"
          >
            {/* Group container for visual separation */}
            <div className="relative bg-gray-900/60 border border-white/10 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-xl">
              {/* subtle top accent line */}
              <div className="absolute inset-x-10 -top-[1px] h-[2px] bg-gradient-to-r from-brand-500/0 via-brand-500/70 to-brand-500/0" />

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                    {String(i + 1).padStart(2, "0")} · Program Category
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-brand-400 mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {group.heading}
                  </h3>
                  <p className="text-gray-400 max-w-2xl">
                    {group.desc}
                  </p>
                </div>
              </div>

              <div
                className={`
                  grid
                  ${gridColsClass}
                  gap-8
                  mx-auto
                `}
              >
                {group.lessons.map((lesson, j) => (
                  <motion.div
                    key={lesson.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="
                      bg-gray-950/70 
                      border border-white/10 
                      rounded-2xl 
                      p-6 md:p-7
                      flex flex-col 
                      justify-between 
                      shadow-lg 
                      hover:shadow-2xl 
                      hover:border-brand-400/50 
                      transition-all 
                      w-full
                    "
                  >
                    <div className="mb-5">
                      <h4
                        className="text-xl font-semibold text-white mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {lesson.title}
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {lesson.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto border-t border-white/10 flex items-center justify-between gap-4 text-sm text-gray-300">
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-white">
                          {lesson.price}
                        </span>
                        <span className="text-gray-400 text-xs mt-0.5">
                          {lesson.duration}
                        </span>
                      </div>

                      <button
                        onClick={() => openBooking(lesson.url)}
                        className="px-4 py-2 rounded-md bg-brand-500 text-white text-xs md:text-sm font-semibold hover:bg-brand-600 transition whitespace-nowrap"
                      >
                        Book Now
                      </button>

                      {/* If you prefer direct Square links instead of modal:
                      <a
                        href={lesson.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-md bg-brand-500 text-white text-xs md:text-sm font-semibold hover:bg-brand-600 transition whitespace-nowrap"
                      >
                        Book Now
                      </a>
                      */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
      <SectionDivider />
    </section>
  );
}
