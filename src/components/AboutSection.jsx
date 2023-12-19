import React from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {/* <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to={"/gallery"}>
              <div className="about-img">
                <img src="src/assets/img/capogrossi_fachada.jpg" alt="" />
              </div>
            </Link>
          </div> */}
          <div className="pt-4 pt-lg-0 order-2 order-lg-1 content text-center">
            <h3>La nostra historia</h3>
            <p className="fst-italic">
              Capogrossi nació en Roma, Italia. En 1922, una familia fundo un
              pintoresco restaurante en el corazón de Fluminicino. Con casi un
              siglo de presencia, Capogrossi mantiene intacta su esencia, sus
              sabores tradicionales y las clásicas recetas de la abuela Filomena,
              icono de la cocina romana.
            </p>

            <p>
              A 100 años de su inauguración, su encanto viaja miles de
              kilómetros para abrir sus puertas en Santiago de Chile, de la mano
              de los prestigiosos chefs Andrea Bernardi y Fernanda Fuentes,
              ambos galardonados actualmente con estrella Michelin en su
              restaurante Nub (Canarias).
            </p>
            <p>
              En este nuevo restaurante, nuestros chefs vienen a fusionar la
              tradición de la abuela Filomena, sus recuerdos y raíces
              culturales, con su modernidad e innovación gastronómica,
              manteniendo siempre los sabores inquebrantables de la dieta
              mediterránea italiana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
