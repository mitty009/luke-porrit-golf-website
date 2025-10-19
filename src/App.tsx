import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Coaching from "./pages/Coaching";
import Record from "./pages/Record";
import Book from "./pages/Book";


export default function App() {
  return (    
    <div className="min-h-screen flex flex-col">
      {/* Site Navigation */}
      <Nav />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/record" element={<Record />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
