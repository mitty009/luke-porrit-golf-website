// src/App.tsx
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Coaching from "./components/Coaching";
import Record from "./components/Record";
// import Book from "./pages/Book"; // not needed in flow now
import { Helmet } from "react-helmet";
import { BookingModalProvider } from "./context/BookingModalContext";
import BookingModal from "./components/BookingModal";

export default function App() {
  return (
    <BookingModalProvider>
      <div className="min-h-screen flex flex-col">
        import {Helmet} from "react-helmet";

        <Helmet>
          {/* Primary Meta */}
          <title>
            Golf Lessons Albury / Wodonga | PGA Coach Luke Porritt | Private & Junior Golf Coaching
          </title>
          <meta
            name="description"
            content="PGA golf professional Luke Porritt provides private, group and junior golf lessons in Albury/Wodonga. Improve your swing, short game and course strategy with tailored coaching programs."
          />
          <meta
            name="keywords"
            content="golf lessons Albury, golf lessons Wodonga, PGA coach Albury, golf coaching Albury Wodonga, golf swing analysis, junior golf programs, golf pro lessons, short game clinics, golf coaching near me, private golf instruction, Luke Porritt golf"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.lukeporrittgolf.com.au" />
          <meta
            property="og:title"
            content="Golf Lessons in Albury / Wodonga | Luke Porritt Golf Coaching"
          />
          <meta
            property="og:description"
            content="Take your game to the next level with PGA coach Luke Porritt. Private, group and junior golf lessons available in Albury/Wodonga."
          />
          <meta property="og:image" content="/og-preview.jpg" />
          <meta property="og:locale" content="en_AU" />

          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Luke Porritt Golf — PGA Golf Lessons in Albury / Wodonga" />
          <meta
            name="twitter:description"
            content="Professional golf coaching and swing improvement programs with PGA coach Luke Porritt in Albury/Wodonga."
          />
          <meta name="twitter:image" content="/og-preview.jpg" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.lukeporrittgolf.com.au" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Luke Porritt Golf",
              url: "https://www.lukeporrittgolf.com.au",
              image: "https://www.lukeporrittgolf.com.au/og-preview.jpg",
              description:
                "PGA-qualified golf professional offering private and group golf lessons in Albury/Wodonga. Coaching available for all ages and abilities.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albury/Wodonga",
                addressRegion: "NSW/VIC",
                addressCountry: "Australia",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-36.08",
                longitude: "146.91",
              },
              openingHours: "Mo-Fr 08:00-18:00",
              priceRange: "$$",
              telephone: "+61 4xx xxx xxx",
              sameAs: [
                "https://www.facebook.com/lukeporrittgolf",
                "https://www.instagram.com/lukeporrittgolf",
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: "https://luke-porritt.square.site/",
                result: { "@type": "Reservation", name: "Book a Golf Lesson" },
              },
              areaServed: ["Albury", "Wodonga", "NSW", "VIC"],
            })}
          </script>
        </Helmet>


        <Nav />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <Coaching />
          <Record />
          {/* <Book />  // Remove this from the layout */}
          <div id="book" /> {/* optional: keep a hidden anchor so old links still scroll */}
        </main>
        <Footer />
      </div>

      {/* Modal lives here so it's always available */}
      <BookingModal />
    </BookingModalProvider>
  );
}
