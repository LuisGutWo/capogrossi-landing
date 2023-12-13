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

function App() {
  // const { user } = useUserContext();

  return (
    <div id="app">
        <TopBar />
        <Header />
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <MenuSection />
        <SpecialsSection />
        <EventsSection />
        <BookATableSection />
        <TestimonialsSection />
        <GallerySection />
        <ChefsSection />
        <ContactSection />
        <Footer />


      {/* <main>
        <Routes>
          <Route path="/" element={<AboutSection />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
