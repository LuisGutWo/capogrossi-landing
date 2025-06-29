import LogoCapoBlanco from "/img/logos/capo-blanco-1024x500.png";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HeroSection = () => {
  const [t] = useTranslation("global");

  if (!t) {
    return <div>Error: Missing translation</div>;
  }

  return (
    <section id="hero" className="slider-container d-flex align-items-center">
      <div className="slider position"></div>

      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <img src={LogoCapoBlanco} alt="" className="hero-img" />
            <h3 className="text-white mb-1">{t("hero.title")}</h3>
            <h1>{t("hero.subtitle")}</h1>

            <div className="btns">
              <a href="#menu" className="btn-menu animated fadeInUp scrollto">
                {t("hero.button_1")}
              </a>
              <a
                href="#book-a-table"
                className="btn-book animated fadeInUp scrollto">
                {t("hero.button_2")}
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200">
            <a
              href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
              rel="noreferrer"
              target="_blank"
              className="glightbox play-btn"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
