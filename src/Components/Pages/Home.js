import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Carrousel from "../Carrousel/Carrousel";
import Categories from "../Categories/Categories";
import "./styleHome.css";
import Carousel from "../Carousel/Carousel";
import SobreNosotras from "../SobreNosotras/SobreNosotras";

const Home = () => {
  return (
    <div className="w-screen mx-auto relative">
  <div className="static top-0 bottom-0 left-0 right-0">
    <NavBar />
    <Carrousel />
    <div className="mb-10">
      <SobreNosotras />
      <Categories />
    </div>
  </div>
  <div className="whatsapp-btn">
    <a href="https://wa.me/573107649291" target="_blank">
      <img
        id="Contacto"
        src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"
        alt="WhatsApp"
        width={100}
        height={100}
      />
    </a>
  </div>
  <div className="static bottom-0 left-0 right-0">
    <Carousel />
    <Footer />
  </div>
</div>

  );
};

export default Home;