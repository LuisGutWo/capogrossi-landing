import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MenuSection = () => {
  const [t] = useTranslation("global");

  if (!t) {
    return <div>Error: Missing translation</div>;
  }

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Cucina & Cocktails</p>
        </div>
        <a
          className="book-a-table-btn scrollto d-lg-flex"
          href="https://gour.media/capogrossi/?qr=1"
          target="_blank"
          rel="noreferrer"
        >
          {t("menu.button") ? t("menu.button") : "Book a Table"}
        </a>
      </div>
    </section>
  );
};

export default MenuSection;
