import { Helmet } from "react-helmet";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Coaching from "./components/Coaching";
import Footer from "./components/Footer";
import { BookingModalProvider } from "./context/BookingModalContext";
import BookingModal from "./components/BookingModal";

function App() {
  return (
    <BookingModalProvider>
      <Helmet>
        <title>Golf Lessons Albury Wodonga | Luke Porritt Golf Academy | PGA Coach</title>
        <meta
          name="description"
          content="PGA Professional Luke Porritt offers golf lessons in Albury, Wodonga, and the Riverina. Private, group, and junior sessions available."
        />
        <meta
          name="keywords"
          content="golf lessons Albury, golf lessons Wodonga, Riverina golf coach, PGA professional, Luke Porritt, junior golf coaching, golf swing lessons, Albury golf academy"
        />
        <link rel="canonical" href="https://lpgolfacademy.netlify.app/" />
      </Helmet>

      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <Coaching />
      </main>
      <Footer />
      <BookingModal />
    </BookingModalProvider>
  );
}

export default App;
