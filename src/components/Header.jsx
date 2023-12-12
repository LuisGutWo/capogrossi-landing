import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
        <a href="index.html" className="logo me-auto me-lg-0"><img src="src/assets/img/capo-negro.png" alt="user" className="img-fluid"/></a>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
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
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
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
