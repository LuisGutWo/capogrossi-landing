import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Tab } from "react-bootstrap";

import SpecialImg1 from "../../public/img/OIP.jpeg";
import SpecialImg2 from "../../public/img/cocina-bistro-tagliolini.jpg";
import SpecialImg3 from "../../public/img/Capogrossi-8-ok.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SpecialsSection = () => {
  return (
    <section id="specials" className="specials">
      <Container className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>lo nuevo de esta temporada</h2>
          <p>La selección del Chef de esta semana...</p>
        </div>

        <Tab.Container defaultActiveKey="tab-1">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="tab-1">
                    Chitarra al Pesto di Sorrento
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-2">
                    Spaghetti Pomodoro dei tre re
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-3">
                    Burrata con oleo al carbone
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <Tab.Content>
                <Tab.Pane eventKey="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Chitarra al Pesto di Sorrento</h3>
                      <p className="fst-italic">
                        Fresco pesto a base de almendras blancas y limón sutil.
                        Servidos en pasta seca Chitarra y terminado con
                        almendras tostadas.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={SpecialImg1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Spaghetti Pomodoro dei tre re</h3>
                      <p className="fst-italic">
                        Pasta larga seca Mancini, aromatizado con ajos, tomates
                        daterinos salteados en aceite EVO y en salsa de tres
                        tomates Italianos.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={SpecialImg2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Burrata con oleo al carbone</h3>
                      <p className="fst-italic">
                        Queso fresco de leche de vaca, hongos boletus
                        confitados, laminas de guanciale templado, tomates semi
                        secos y terminados con aceite aromatizado al carbon y
                        ahumado con madera de cerezo.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={SpecialImg3} alt="" className="img-fluid" />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default SpecialsSection;
