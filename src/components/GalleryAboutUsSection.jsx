import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GalleryAboutUsSection = () => {
  const [t] = useTranslation("global");
 
  return (
    <section id="why-us" className="why-us">
      <div className="container m-0" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 p-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <img
                className="img-fluid"
                src="https://capogrossi.cl/wp-content/uploads/2021/12/Pasta-38.jpg"
                alt=""
              />
              <h3>{t("gallery.title_1")} </h3>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 p-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <img
                className="img-fluid"
                src="https://capogrossi.cl/wp-content/uploads/2021/12/Negroni.jpeg"
                alt=""
              />
              <h3>{t("gallery.title_2")}</h3>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 p-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <img
                className="img-fluid"
                src="https://capogrossi.cl/wp-content/uploads/2021/12/better-to-reserve-a-table.jpeg"
                alt=""
              />
              <h3>{t("gallery.title_3")}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryAboutUsSection;
