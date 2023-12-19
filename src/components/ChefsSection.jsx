import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ChefsSection = () => {
  return (
    <section id="chefs" className="chefs">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Chefs</h2>
          <p>Nuestros profesionales</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <img
                src="src/assets/img/chefs/chefs-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
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
                src="src/assets/img/chefs/chefs-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
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
            <div className="member" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="src/assets/img/chefs/chefs-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>Cook</span>
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
