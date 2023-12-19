import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { useUserContext } from "./context/UserContext";
import Home from "./components/Home";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import MenuSection from "./components/MenuSection";
import SpecialsSection from "./components/SpecialsSection";
import EventsSection from "./components/EventsSection";
import BookATableSection from "./components/BookATableSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GallerySection from "./components/GallerySection";
import ChefsSection from "./components/ChefsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NotFound from "./utils/NotFound";

function App() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const { user } = useUserContext();

  return (
    <div id="app">
      <TopBar />
      <header className={`${sticky ? "sticky" : ""}`}>
        <Header />
      </header>
      <HeroSection />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/whyUs" element={<WhyUsSection />} />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/specials" element={<SpecialsSection />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/bookATable" element={<BookATableSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/chefs" element={<ChefsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* <div id="preloader"></div> */}
      {/* <BackToTopButton />
      <WhatsAppButton /> */}
      <Footer />
    </div>
  );
}

export default App;
