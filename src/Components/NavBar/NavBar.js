import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const hamburguerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleHamburguerClick = () => {
    hamburguerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-images">
          <a href="/">
            <img
              className="nav-branding"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676432024/Mar___Arte__2_-removebg-preview_zs16rz.png"
              width={150}
              height={150}
              onClick={scrollToTop}
            />
          </a>
          <a href="/login">
            <img
              className="login"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682467205/4332353f5e7327a30370312c2b49f779-removebg-preview_yfocca.png"
            />
          </a>
        </div>
        <ul className="nav-menu" ref={navMenuRef}>
          <a href="/">
            Inicio
          </a>
          {typeof isLoggedIn === "boolean" && isLoggedIn ? (
            <a href="/addProducts">
              Add Products
            </a>
          ) : null}
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
          <div className="instagram-image">
          <a href="https://www.instagram.com/maryarte_maghyray/" target="_blank">
            <img
              class=""
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="instagram"
              width={50}
              height={50}
            />
          </a>
          </div>
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
