import React from "react";
import GalleryImg1 from "../assets/img/gallery/gallery-1.jpg";
import GalleryImg2 from "../assets/img/gallery/gallery-2.jpg";
import GalleryImg3 from "../assets/img/gallery/gallery-3.jpg";
import GalleryImg4 from "../assets/img/gallery/gallery-4.jpg";
import GalleryImg5 from "../assets/img/gallery/gallery-5.jpg";
import GalleryImg6 from "../assets/img/gallery/gallery-6.jpg";
import GalleryImg7 from "../assets/img/gallery/gallery-7.jpg";
import GalleryImg8 from "../assets/img/gallery/gallery-8.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Galería de imágenes</h2>
          <p>Un poco mas de nosotros</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg1}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg1}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg2}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg2}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg3}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg3}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg4}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg4}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg5}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg5}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg6}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg6}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg7}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg7}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href={GalleryImg8}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <img
                  src={GalleryImg8}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
