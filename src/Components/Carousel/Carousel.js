// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 0,
//       },
//     },
//   ],
// };

// const Carousel = () => {
//   const slides = [
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005444/Dise%C3%B1o_sin_t%C3%ADtulo_12_p8minz.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005444/Dise%C3%B1o_sin_t%C3%ADtulo_10_wowinx.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005449/Dise%C3%B1o_sin_t%C3%ADtulo_9_js1vp9.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005448/Dise%C3%B1o_sin_t%C3%ADtulo_8_wo4awl.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005446/Dise%C3%B1o_sin_t%C3%ADtulo_11_turgge.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005446/Dise%C3%B1o_sin_t%C3%ADtulo_14_gydqoi.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005449/Dise%C3%B1o_sin_t%C3%ADtulo_13_wbkjqr.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005449/Dise%C3%B1o_sin_t%C3%ADtulo_6_gstdl2.png",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677005449/Dise%C3%B1o_sin_t%C3%ADtulo_5_c5hiiu.png",
//     },
//   ];
  

//   return (
//     <div className="grid-cols-3 gap-2 w-full">
//     <Slider {...settings}>
//       {slides.map((slide, index) => (
//         <div key={index} className="w-80 h-80">
//           <img src={slide.image} alt={`Slide ${index + 1}`} style={{ objectFit: "cover" , width: "100%", height: "100%" }} />
//         </div>
//       ))}
//     </Slider>
//   </div>
  
  
//   );
// };
// export default Carousel;
