import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (username === "MamaRaymond" && password === "Piria123") {
          setErrorMessage("");
          localStorage.setItem("isLoggedIn", "true");
          window.location.replace("/addProducts");
        } else {
          setErrorMessage("Usuario o contraseña incorrectos");
        }
      };

  return (
    <div>
      <NavBar /> 
            <div class="flex bg-white w-full h-full">
                <form class="p-10 bg-white rounded flex justify-center items-center flex-col w-full h-full mb-8">
                    <svg
                        class="w-20 h-20 text-gray-600 mb-2"
                        viewbox="0 0 40 40"
                        fill="currentColor"
                    />
                    <img
                        class="text-gray-600 mb-2"
                        src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682462693/mar_y_arte-removebg-preview_sl4dvz.png"
                        alt="user"
                        width={300}
                        height={300}
                    />
                    <p class="mb-5 text-3xl uppercase text-gray-700">Login</p>
                    <input
                        class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Usuario"
                        required
                    />
                    <input
                        class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Contraseña"
                    />
                    <button
                        onClick={handleSubmit}
                        class="bg-slate-600 hover:bg-red-600 text-white font-bold p-2 rounded w-80"
                        type="submit"
                    >
                        <span class="text-white">Login</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;