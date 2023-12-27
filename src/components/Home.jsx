import React from "react";
import GalleryAboutUsSection from "./GalleryAboutUsSection";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import SpecialsSection from "./SpecialsSection";
import BookATableSection from "./BookATableSection";
import GallerySection from "./GallerySection";
import ChefsSection from "./ChefsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <AboutSection />
      <GalleryAboutUsSection />
      <MenuSection />
      <ChefsSection />
      <SpecialsSection />
      <BookATableSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};

export default Home;
