const SQUARE_SITE = import.meta.env.VITE_SQUARE_SITE_URL || "https://luke-porritt.square.site/";

export default function Book() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Book Lessons</h2>
      <p className="mt-2 text-gray-600">
        Use the booking interface below to view availability and book lessons directly with Luke.
        Payments are handled securely via Square.
      </p>

      <div className="mt-6 w-full h-[800px] border rounded-lg overflow-hidden">
        <iframe
          title="Square bookings"
          src={SQUARE_SITE}
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
