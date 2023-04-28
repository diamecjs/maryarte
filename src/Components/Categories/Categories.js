import React from "react";
import "./style.css";

const Categories = () => {
  return (

    <div class="categories-container">


      <a href="/bolsos">
        <div class="card card1">
          <div class="box">
            <div class="content">
              <h1 class="h1Cat">Bolsos</h1>
            </div>
          </div>
        </div>
      </a>

      <a href="/accesorios">
        <div class="card card2">
          <div class="box">
            <div class="content">
              <h1 class="h1Cat">Accesorios</h1>
            </div>
          </div>
        </div>
      </a>

      <a href="/Vestimenta">
        <div class="card card3">
          <div class="box">
            <div class="content">
              <h1 class="h1Cat">Vestimenta</h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Categories;