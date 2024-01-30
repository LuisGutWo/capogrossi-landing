import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GallerySection = () => {
  const [t] = useTranslation("global");
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0 d-flex justify-content-center align-items-flex-start flex-wrap gap-5">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <h1>{t("gallery.title_4")}</h1>
              <h6>{t("gallery.description_1")}</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <h1>{t("gallery.title_5")}</h1>
              <h6>{t("gallery.description_2")}</h6>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <h1>{t("gallery.title_6")}</h1>
              <h6>{t("gallery.description_3")}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
