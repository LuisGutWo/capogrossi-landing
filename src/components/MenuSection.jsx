import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MenuSection = () => {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Cucina & Cocktails</p>
        </div>
      <a
        className="book-a-table-btn scrollto d-none d-lg-flex"
        href="https://gour.media/capogrossi/?qr=1"
        target="_blank"
      >
        Ver Menu
      </a>
      </div>
    </section>
  );
};

export default MenuSection;
