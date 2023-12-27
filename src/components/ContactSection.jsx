import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contacto</h2>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          border="0"
          allowFullScreen
          className="iframe-map"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bx bxs-map"></i>
                <h4>Dirección</h4>
                <p>Alonso de Cordova 4225, Vitacura, Stg. de Chile</p>
              </div>

              <div className="open-hours">
                <i className="bx bxs-time-five"></i>
                <h4>Horarios</h4>
                <p>
                  Martes a Domingo:
                  <br />
                  1:00 PM - 11:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bx bx-envelope"></i>
                <h4>Correo:</h4>
                <p>contacto@capogrossi.cl</p>
              </div>

              <div className="phone">
                <i className="bx bxs-phone-call"></i>
                <h4>Telf:</h4>
                <p>+569 920323569</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Correo"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Titulo"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="8"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Cargando</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Tu mensaje fue enviado. Gracias!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
