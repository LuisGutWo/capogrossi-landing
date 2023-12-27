// import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiAlignLeft } from "react-icons/bi";
import ImgLogo2 from "../../public/img/capo-negro.png";

const Header = () => {
  return (
    <header id="header" className="d-flex align-items-center">
      <Navbar
        expand="lg"
        variant="dark"
        className="container-fluid container-xl d-flex align-items-center justify-content-lg-between ps-4"
      >
        <Container
          fluid
          id="navbar"
          className="navbar order-last order-lg-0 d-flex justify-content-end pe-4"
        >
          <Navbar.Brand href="#topbar" className="logo me-auto me-lg-0">
            <img src={ImgLogo2} alt="user" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <BiAlignLeft style={{ color: "Background" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "230px" }}
              navbarScroll
            >
              <NavDropdown.Item className="nav-link scrollto" href="#topbar">
                Home
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#about">
                Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#menu">
                Menu
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#specials">
                Especiales
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#chefs">
                Chefs
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#gallery">
                Galería de imágenes
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link scrollto" href="#contact">
                Contacto
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Link
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Reservas
        </Link>
      </Navbar>
    </header>
  );
};

export default Header;
