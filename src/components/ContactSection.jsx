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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2396479240871!2d-70.58963742778704!3d-33.40353253205285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf30819cc9e1%3A0x580123b11df0b70b!2sAlonso%20de%20C%C3%B3rdova%204225%2C%207630524%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1703748062197!5m2!1ses-419!2scl"
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
