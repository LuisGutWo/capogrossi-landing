// import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiAlignLeft } from "react-icons/bi";
import ImgLogo2 from "../assets/img/capo-negro.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t] = useTranslation("global");
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
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          {t("header.navbar.reserves")}
        </Link>
      </Navbar>
    </header>
  );
};

export default Header;
