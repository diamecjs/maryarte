import React, { useRef } from "react";
import "./navbar.css";


export const NavBar = () => {

  const hamburguerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleHamburguerClick = () => {
    hamburguerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };

  return (
    <header>
      <nav className="navbar">
        <img className="nav-brandign" src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676432024/Mar___Arte__2_-removebg-preview_zs16rz.png" width={150} height={150}/>
        <ul className="nav-menu" ref={navMenuRef}>
          <li className="nav-item">
            <a href="#" className="nav-link"> Inicio </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Sobre Nosotras </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Catálogo </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Contacto </a>
          </li>
        </ul>
        <div className="hamburguer" ref={hamburguerRef} onClick={handleHamburguerClick}>
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

