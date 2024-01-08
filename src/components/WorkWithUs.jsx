import React from "react";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WorkWithUs = () => {
  const [t] = useTranslation("global");

  return (
    <section id="work" className="work section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("work.title")}</h2>
          <p>{t("work.title_2")}</p>
          <div className="d-flex flex-direction-row justify-content-start gap-3 align-items-baseline">
            <h6>{t("work.description")}</h6>
            <h4>{t("work.description_2")}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
