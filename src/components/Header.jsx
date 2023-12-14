import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a className="logo me-auto me-lg-0" href="#hero">
          <img
            src="src/assets/img/capo-negro.png"
            alt="user"
            className="img-fluid"
          />
        </a>

        <Container id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Nosotros
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#specials">
                Especialidad
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#events">
                Eventos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#chefs">
                Chefs
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Galería de imágenes
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bx bx-list-ul bx-burst bx-rotate-90 mobile-nav-toggle"></i>
        </Container>
        <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Reservas
        </a>
      </div>
    </div>
  );
};

export default Header;
