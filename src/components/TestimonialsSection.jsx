import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>Historias de experiencias</p>
        </div>

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Se nota la pasión y dedicación que entregan estos muchachos en
                  su dia a dia, nos encanto el calor humano que se percibe.
                  Hermosa experiencia.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="src/assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Pedro Muñoz</h3>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Cada vez que volvemos a Capogrossi es un agrado desde que
                  entramos a la puerta como hasta que pedimos la cuenta.
                  Excelente servicio y maravillosa comida.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="src/assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Paola Wong</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Encontrar la misma calidad tanto en el servicio como en la
                  comida es algo impagable hoy en dia. Se nota la calidad de
                  profesionales que son.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="src/assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Janna Coleman</h3>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Me apasiona la comida Italiana, sus sabores tradicionales y
                  característicos es lo que la hace famosa y Capogrossi
                  definitivamente lo logra. Lo recomiendo a ojos cerrados,
                  dejate llevar de la mano de ellos.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="src/assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matias Calderon</h3>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Vivo fuera de Santiago, pero cada vez que viajo Capogrossi es
                  una parada que nunca puedo dejar pasar. Me encanta su calidez,
                  su buena calidad de la comida y lo agradable de sus meseros.
                  Simplemente único.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="src/assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Rodrigo Sepulveda</h3>
              </div>
            </SwiperSlide>
            {/* <!-- End testimonial item --> */}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
