import React from "react";
import ImgChef1 from "../../public/img/45A2533-1_bn-683x1024.jpg"
import ImgChef2 from "../../public/img/45A2615-1_bn-683x1024.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ChefsSection = () => {
  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-6">
            <div className="section-title">
              <p>Chefs. Andrea Bernardi & Fernanda Fuentes</p>
              <br />
              <h2>Galardonados con Estrellas Michelin</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <img
                src={ImgChef1}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Andrea Bernardi</h4>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="200">
              <img
                src={ImgChef2}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Fernanda Fuentes</h4>
                </div>
                <div className="social">
                  <a href="">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
