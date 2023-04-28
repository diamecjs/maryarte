import React from "react";


const Footer = () => {
  
  const date = new Date();
  const year = date.getFullYear();




  return (

    <footer class="relative bg-cyan-500 pt-8 sm:pt-0 pb-2 fixed bottom-0 w-full mt-auto">


    <div id="Contacto">
          <div class="flex">
            <div class="flex">
              <div class="flex flex-row items-center space-x-4">
              <a href="https://www.instagram.com/maryarte_maghyray/" target="_blank">
                <img
                  class="justify-items-center"
                  src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
                  alt="instagram"
                  width={50}
                  height={50}
                />
                </a>
                <img
                  class="justify-items-center"
                  src="https://cdn-icons-png.flaticon.com/512/4038/4038671.png"
                  alt="hilos"
                  width={90}
                  height={90}
                />
                  <img
                  class="justify-items-center"
                  src="https://cdn-icons-png.flaticon.com/512/2442/2442280.png"
                  alt="agujas"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div class="w-5/6 lg:w-5/6  text-right px-4 overflow-hidden">
  <span class="block uppercase text-white text-sm font-semibold mb-2">
    Contacto
  </span>
  <ul class="list-unstyled">
    <li class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap">
      📞 - 310 764 9291
    </li>
    <li class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap">
      Rodadero - Santa Marta
    </li>
    <li class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap">
      📧 maghyray@hotmail.com
    </li>
  </ul>
</div>

            
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-md text-white font-semibold ml-5 text-center">
               Hecho con  🧡 
            </div>
              <div class="text-sm text-white font-semibold py-1">
              &copy; {year} All Rights Reserved
              </div>
            </div>
            <div class="text-xs text-white font-semibold py-1">
                Created By 
               <a class=" mr-20 text-xs text-cyan-900 hover:text-blueGray-800 font-semibold py-1" href="https://portfolio-diame.vercel.app/" target="_blank">
                M&D Creaciones Web
              </a>
            </div>
          </div>
        </div>
      </footer>
     
    
  );
};

export default Footer;
