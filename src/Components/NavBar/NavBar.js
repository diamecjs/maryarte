import React, { useRef } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const hamburguerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleHamburguerClick = () => {
    hamburguerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };


  const scrollToTop = () => {
    scroll.scrollToTop();
};

  return (
    <header>
      <nav className="navbar">
        <img
          className="nav-brandign"
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676432024/Mar___Arte__2_-removebg-preview_zs16rz.png"
          width={150}
          height={150}
          onClick={scrollToTop}
        />
        <ul className="nav-menu" ref={navMenuRef}>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            activeClass="active"
            to="sobre-nosotras"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre Nosotras
          </Link>
          <Link
            activeClass="active"
            to="categories"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Catálogo
          </Link>
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacto
          </Link>
        </ul>
        <div
          className="hamburguer"
          ref={hamburguerRef}
          onClick={handleHamburguerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
