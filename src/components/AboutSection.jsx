import React from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="pt-4 pt-lg-0 order-2 order-lg-1 content text-center">
            <h3>{t("about.title")} </h3>
            <p>{t("about.text_1")}</p>

            <p>{t("about.text_2")}</p>
            <p>{t("about.text_3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
