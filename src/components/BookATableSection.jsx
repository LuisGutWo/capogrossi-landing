import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BookATableSection = () => {
  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Reservas</h2>
          <p>100% online</p>
        </div>
        <a
          className="book-a-table-btn scrollto d-lg-flex"
          href="https://capogrossi.cl/reservas/"
          target="_blank"
        >
          Reservar
        </a>
      </div>
    </section>
  );
};

export default BookATableSection;
