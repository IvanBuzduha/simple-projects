import "./style.css";
// import Swiper from "swiper/bundle";
// import "./script";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderSwiper = () => {
  // let swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  //   observer: true,
  //   observeParents: true,
  //   parallax: true
  // });

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      ...
    </Swiper>
  );
};
//   return (
//     <>
//       <div className="swiper mySwiper">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <img src="./img/1140x641.jpg" alt="img1" />
//           </div>
//           <div className="swiper-slide">
//             <img src="./img/1140x641 (1).jpg" alt="img2" />
//           </div>
//           <div className="swiper-slide">
//             <img src="../img/1140x641 (2).jpg" alt="img3" />
//           </div>
//           <div className="swiper-slide">
//             <img src="../img/1140x641 (3).jpg" alt="img4" />
//           </div>
//           <div className="swiper-slide">
//             <img src="../img/05-659.avif" alt="img5" />
//           </div>
//         </div>
//         <div className="swiper-pagination" />
//       </div>
//       <div className="swiper-button-next" />
//       <div className="swiper-button-prev" />
//     </>
//   );
// };
export default SliderSwiper;
