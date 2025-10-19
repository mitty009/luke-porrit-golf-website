import { motion } from "framer-motion";

export default function Coaching() {
  const services = [
    { title: "Private Lesson (60 mins)", desc: "One-on-one coaching with video analysis & improvement plan." },
    { title: "Short Game Clinic", desc: "Small-group focus on wedges, putting, and scoring from 100m in." },
    { title: "Junior Program", desc: "Weekly coaching pathway designed for junior golfers." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Coaching Services</h2>
      <p className="mt-3 text-gray-600 max-w-3xl">
        Luke provides tailored coaching programs: private lessons, group clinics, junior development,
        and on-course sessions. Each lesson uses modern tools like video swing analysis and launch
        monitor data to create a clear improvement pathway.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <motion.div key={s.title} whileHover={{ y: -6 }} className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
