import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative h-[80vh] md:h-screen max-h-[900px] w-full overflow-hidden flex items-center justify-center text-center">
            {/* Background video (keeps immersive feel, bounded height on desktop) */}
            <video
                className="absolute inset-0 w-full h-full object-contain bg-black aspect-[9/16]"
                src="/golf-hero.MP4"
                autoPlay
                loop
                muted
                playsInline
            />


            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                    Elevate Your Game
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Unlock your full potential with expert coaching from Luke Porritt.
                    Master your swing, sharpen your short game, and lower your score.
                </p>
                <Link
                    to="/book"
                    className="inline-block px-8 py-3 rounded-md bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:ring-offset-2 focus:ring-offset-gray-950 transition"
                >
                    Book a Lesson
                </Link>
            </div>
        </section>
    );
}
