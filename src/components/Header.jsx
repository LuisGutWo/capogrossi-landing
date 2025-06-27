import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiAlignLeft } from "react-icons/bi";
import LogoCapoNegro from "/img/logos/capo-negro.png";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "es",
    flag: (
      <img
        src={"../img/icons/chile_18293.ico"}
        alt="CL"
        style={{ width: "0.8em", verticalAlign: "middle" }}
      />
    ),
  },
  {
    code: "en",
    flag: (
      <img
        src={"../img/icons/estados-unidos.png"}
        alt="CL"
        style={{ width: "0.8em", verticalAlign: "middle" }}
      />
    ),
  },
  {
    code: "por",
    flag: (
      <img
        src={"../img/icons/brasil.png"}
        alt="CL"
        style={{ width: "0.8em", verticalAlign: "middle" }}
      />
    ),
  },
  // Add more languages as needed
];

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const currentLang = i18n.language || "es";
  const currentLangObject = languages.find((l) => l.code === currentLang);
  const currentFlag = currentLangObject?.flag || "🌐";

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const sticky = header.offsetTop;
        setIsSticky(window.scrollY > sticky);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="d-flex align-items-center">
      <Navbar
        expand="lg"
        variant="dark"
        className="container-fluid container-xl d-flex align-items-center justify-content-lg-between ps-4">
        <Container
          fluid
          id="navbar"
          className="navbar order-last order-lg-0 d-flex justify-content-end pe-4">
          <Navbar.Brand href="#topbar" className="logo me-auto me-lg-0">
            <img src={LogoCapoNegro} alt="user" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BiAlignLeft style={{ color: "Background" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "230px" }}
              navbarScroll>
              <NavDropdown.Item className="nav-link scrollto" href="#topbar">
                {t("header.navbar.home")}
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#about">
                {t("header.navbar.about")}
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#menu">
                {t("header.navbar.menu")}
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#specials">
                {t("header.navbar.specials")}
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#chefs">
                {t("header.navbar.chefs")}
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#contact">
                {t("header.navbar.contact")}
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Link
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex">
          {t("header.navbar.reserves")}
        </Link>

        {isSticky && (
          <div style={{ marginLeft: "10px", fontSize: "1.5rem" }}
            className="sticky-flag">
            {currentFlag}
          </div>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
