// import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a className="logo me-auto me-lg-0" href="#topbar">
          <img
            src="src/assets/img/capo-negro.png"
            alt="user"
            className="img-fluid"
          />
        </a>
        <Container id="navbar" className="navbar order-last order-lg-0 d-flex justify-content-end pe-4">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#topbar">
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
                Especiales
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
    </header>
  );
};

export default Header;
