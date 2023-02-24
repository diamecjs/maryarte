import React, { useState, useEffect } from "react";

const Carrousel = () => {
  const slides = [
    {
      text: "",
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676829617/Regalate_Arte_1_nstg84.png",
    },
    {
      text: "",
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676830571/Dise%C3%B1o_sin_t%C3%ADtulo_egakmq.gif",
    },
    {
      text: "",
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1676829618/un_colorr_l1tral.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className=" max-w-full">
      <div className=" relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img class="" src={slide.image} alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carrousel;
