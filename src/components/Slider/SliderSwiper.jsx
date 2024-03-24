import "./style.css";

import "./script";

const SliderSwiper = ({ swiper }) => {
  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="./img/1140x641.jpg" alt="img" />
          </div>
          <div className="swiper-slide">
            <img src="./img/1140x641 (1).jpg" alt="img" />
          </div>
          <div className="swiper-slide">
            <img src="../img/1140x641 (2).jpg" alt="img" />
          </div>
          <div className="swiper-slide">
            <img src="../img/1140x641 (3).jpg" alt="img" />
          </div>
          <div className="swiper-slide">
            <img src="../img/05-659.avif" alt="img" />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </>
  );
};
export default SliderSwiper;
