import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import AboutSection from "./components/AboutSection";
import GalleryAboutUsSection from "./components/GalleryAboutUsSection";
import MenuSection from "./components/MenuSection";
import SpecialsSection from "./components/SpecialsSection";
import BookATableSection from "./components/BookATableSection";
import GallerySection from "./components/GallerySection";
import ChefsSection from "./components/ChefsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NotFound from "./utils/NotFound";
import BackToTopButton from "./utils/BackToTopButton";
import WhatsAppButton from "./utils/WhatsAppButton";

function App() {
  const [sticky, setSticky] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || window === null) {
      console.error("window is undefined or null");
      return;
    }

    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app">
      {loading && <div id="preloader" />}
      {!loading && (
        <>
          <title>Capogrossi - Home </title>
          <meta
            name="description"
            content="Capogrossi - Authentic Italian Cuisine"
          />
          <meta
            name="keywords"
            content="Italiana, Restaurant, Capogrossi, Comida Italiana, Pasta, Italian Food, Authentic Italian Cuisine"
          />
          <meta name="author" content="Capogrossi Team" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/img/capo.svg" />
          <TopBar />
          <header className={`${sticky ? "sticky" : ""}`}>
            <Header />
          </header>
          <HeroSection />

          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/whyUs" element={<GalleryAboutUsSection />} />
              <Route path="/menu" element={<MenuSection />} />
              <Route path="/specials" element={<SpecialsSection />} />
              <Route path="/bookATable" element={<BookATableSection />} />
              <Route path="/gallery" element={<GallerySection />} />
              <Route path="/chefs" element={<ChefsSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <BackToTopButton />
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
