import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../Cart/cartContext";
import { useContext } from "react";


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

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-images">
          <RouterLink to="/">
            <img
              className="nav-branding"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676432024/Mar___Arte__2_-removebg-preview_zs16rz.png"
              width={150}
              height={150}
              onClick={scrollToTop}
            />
          </RouterLink>
          <RouterLink to="/login">
            <img
              className="login"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682467205/4332353f5e7327a30370312c2b49f779-removebg-preview_yfocca.png"
            />
          </RouterLink>
        </div>
        <ul className="nav-menu" ref={navMenuRef}>
          <RouterLink to="/">
            Inicio
          </RouterLink>
          {typeof isLoggedIn === "boolean" && isLoggedIn ? (
            <RouterLink to="/addProducts">
              Add Products
            </RouterLink>
          ) : null}
          <ScrollLink
            activeClass="active"
            to="sobre-nosotras"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre Nosotras
            </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="categories"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Catálogo
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacto
          </ScrollLink>
          <RouterLink style={{ display: "flex", alignItems: "center" }} to="/cart">
          Carrito  ({quantity})
          <img class="" src="https://img.icons8.com/?size=512&id=n8AfEu6DRzCR&format=png" width={50} height={50}/>
          </RouterLink>
          <div className="instagram-image">
          <RouterLink to="https://www.instagram.com/maryarte_maghyray/" target="_blank">
            <img
              class=""
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="instagram"
              width={50}
              height={50}
            />
          </RouterLink>
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
