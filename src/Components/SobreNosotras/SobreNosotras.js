const SobreNosotras = () => {
    return (
      <div
        class="flex flex-col md:pb-6 lg:pb-8 mx-5 md:mx-10 lg:mx-20 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3"
        style={{ position: "relative", top: "20rem" }}
      >
        <div class="flex flex-col items-center w-full md:w-1/2 lg:w-2/3 md:relative md:top-16">
          <div class="max-w-lg md:mx-12 lg:mx-20 md:order-2">
            <h1 class="text-3xl font-medium tracking-wide text-teal-500 dark:text-white md:text-4xl lg:text-5xl">
              Mar & Arte
            </h1>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              ¡Bienvenidos a nuestro emprendimiento de tejido a crochet! Somos una
              madre y una hija apasionadas por el arte del tejido, y queremos
              compartir con ustedes nuestra pasión a través de nuestras
              creaciones. Nos encanta tejer con todo tipo de materiales y colores,
              y experimentar con nuevas técnicas y patrones. Cada una de nuestras
              piezas es única y está tejida con amor y dedicación. Además, nos
              aseguramos de usar materiales de alta calidad para garantizar la
              durabilidad y comodidad de nuestras creaciones. Desde que empezamos
              este emprendimiento, hemos tenido la oportunidad de conocer a
              personas maravillosas que comparten nuestra pasión por el tejido.
              Estamos muy agradecidas por cada cliente que ha confiado en nosotras
              y nos ha permitido crear piezas especiales para ellos. Nos encanta
              lo que hacemos, y esperamos que nuestras creaciones te llenen de
              alegría y te hagan sentir tan especial como te mereces. ¡Gracias por
              visitar nuestra página!.
            </p>
          </div>
        </div>
  
        <div class="flex flex-col md:pb-6 lg:pb-8 mx-5 md:mx-10 lg:mx-20 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3" style={{ position: "relative", top: "8rem" }}>
          <div class="flex-1 flex justify-center items-center md:w-1/2">
          <img class="object-cover max-w-xs md:max-w-sm lg:max-w-xl rounded-md" src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677085250/Logo_Marca_personal_Acuarela_a_mano_Azul__7_-removebg-preview_tndqxu.png" alt="apple watch photo" />


          </div>
        </div>
      </div>
    );
  };
  
  export default SobreNosotras;