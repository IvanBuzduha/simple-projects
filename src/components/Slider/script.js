// import Swiper from "swiper";
// import "swiper/css";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
