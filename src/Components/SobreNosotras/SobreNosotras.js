const SobreNosotras = () => {
  return (
    <div className="flex flex-col md:pb-6 lg:pb-8 mx-0 p-0 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3 bg-gradient-to-br from-pink-300 via-blue-300 via-red-200 to-purple-400 min-h-screen w-screen">
      <div className="flex flex-col items-center w-full md:w-1/2 lg:w-2/3 md:relative md:top-16">
        <div className="max-w-lg md:mx-12 lg:mx-20 md:order-2">
          <h1 className="text-3xl ml-5 font-medium tracking-wide text-teal-500 dark:text-white md:text-4xl lg:text-5xl">
            Mar & Arte
          </h1>
          <p className="font-semibold mt-4 mx-4 md:mx-8 dark:text-teal-600">
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

      <div className="flex flex-col md:pb-6 lg:pb-8 mx-0 p-0 space-y-3 md:space-y-5 lg:space-y-7 md:flex-row md:items-center md:space-x-3">
        <div className="flex-1 flex justify-center mt-20 items-center md:w-1/2">
          <img className="object-cover max-w-xs md:max-w-sm lg:max-w-xl" src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682462693/mar_y_arte-removebg-preview_sl4dvz.png" alt="apple watch photo" />
        </div>
      </div>
    </div>
  );
};

export default SobreNosotras;