import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import Accesorios from "./Components/Pages/Accesorios/Accesorios";
import Bolsos from "./Components/Pages/Bolsos/Bolsos";
import Vestimenta from "./Components/Pages/Vestimenta/Vestimenta"
import Login from "./Components/Login/Login"
import AddProducts from "./Components/AddProducts/AddProducts";
import EditProduct from "./Components/EditProduct/EditProduct";

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/'
//"https://maryarte-back-production.up.railway.app/" ||

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedIsLoggedIn === "true") {
          setIsLoggedIn(true);
      }
  }, []);

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/Bolsos" element={<Bolsos />} />
          <Route path="/vestimenta" element={<Vestimenta />} />
          <Route path="/login" element={<Login />} />
          {typeof isLoggedIn === "boolean" && isLoggedIn ? (
          <Route path="/addProducts" element={<AddProducts />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
           {typeof isLoggedIn === "boolean" && isLoggedIn ? (
          <Route path="/editProducts/:id" element={<EditProduct />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
