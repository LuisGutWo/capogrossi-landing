import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BookATableSection = () => {
  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Reservaciones</h2>
          <p>Asegura tu mesa...</p>
        </div>

        <form
          action="forms/book-a-table.php"
          method="post"
          role="form"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Tu Nombre"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Tu Correo"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Tu telefono"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                name="date"
                className="form-control"
                id="date"
                placeholder="Fecha"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="time"
                id="time"
                placeholder="Hora"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                className="form-control"
                name="people"
                id="people"
                placeholder="# de personas"
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Observaciones y mensajes"
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Cargando</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Su reserva se realizo con exito. Estaremos comunicando contigo
              para confirmar tu asistencia
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Reservar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATableSection;
