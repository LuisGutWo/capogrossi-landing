import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Tab } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import SpecialImg1 from "/img/menu/OIP.jpeg";
import SpecialImg2 from "/img/menu/cocina-bistro-tagliolini.jpg";
import SpecialImg3 from "/img/menu/Capogrossi-8-ok.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SpecialsSection = () => {
  const [t] = useTranslation("global");
  return (
    <section id="specials" className="specials">
      <Container className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("specials.title")} </h2>
          <p>{t("specials.paragraph")} </p>
        </div>

        <Tab.Container defaultActiveKey="tab-1">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="tab-1">
                    {t("specials.cards.item_1.title")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-2">
                    {t("specials.cards.item_2.title")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-3">
                    {t("specials.cards.item_3.title")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <Tab.Content>
                <Tab.Pane eventKey="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{t("specials.cards.item_1.title")}</h3>
                      <p className="fst-italic">
                        {t("specials.cards.item_1.paragraph")}
                      </p>
                    </div>
                    <div className="col-lg-4 text-center img-container order-1 order-lg-2">
                      <img src={SpecialImg1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{t("specials.cards.item_2.title")}</h3>
                      <p className="fst-italic">
                        {t("specials.cards.item_2.paragraph")}
                      </p>
                    </div>
                    <div className="col-lg-4 text-center img-container order-1 order-lg-2">
                      <img src={SpecialImg2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{t("specials.cards.item_3.title")}</h3>
                      <p className="fst-italic">
                        {t("specials.cards.item_3.paragraph")}
                      </p>
                    </div>
                    <div className="col-lg-4 text-center img-container order-1 order-lg-2">
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
