import GalleryAboutUsSection from "./GalleryAboutUsSection";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import SpecialsSection from "./SpecialsSection";
import BookATableSection from "./BookATableSection";
import ChefsSection from "./ChefsSection";
import ContactSection from "./ContactSection";
import GallerySection from "./GallerySection";
import WorkWithUs from "./WorkWithUs";

const Home = () => {
  if (!AboutSection || !GalleryAboutUsSection || !MenuSection || !ChefsSection || !SpecialsSection || !ContactSection || !BookATableSection || !GallerySection || !WorkWithUs) {
    throw new Error("Any of the components is null or undefined");
  }

  return (
    <>
      <AboutSection />
      <GalleryAboutUsSection />
      <MenuSection />
      <ChefsSection />
      <SpecialsSection />
      <ContactSection />
      <BookATableSection />
      <GallerySection />
      <WorkWithUs />
    </>
  );
};

export default Home;
