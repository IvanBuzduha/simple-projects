import "./style.css";
// import Swiper from "swiper/bundle";
// import "./script";

// import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
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
      className={"mySwiper"}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="./img/1140x641.jpg" alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/1140x641 (1).jpg" alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/1140x641 (2).jpg" alt="img3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/1140x641 (3).jpg" alt="img4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../img/05-659.avif" alt="img5" />
      </SwiperSlide>
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
