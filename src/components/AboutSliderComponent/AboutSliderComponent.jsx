import React from "react";
import "./AboutSliderComponent.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
function AboutSliderComponent() {
  return (
    <div className="aboutSliderComponent">
      <div className="aboutSliderComponent_container">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}

          className="mySwiper"
        >
          <SwiperSlide className="swiper_slide">
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
            <div className="aboutSlider_btn">
              <button>
                <Link to={"/"}>
                  Daha <span>ətraflı</span>
                </Link>
              </button>
              <div className="lines">
                <div className="line One"></div>
                <div className="line Two"></div>
                <div className="line Three"></div>
                <div className="line Four"></div>
                <div className="line Five"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutSliderComponent;
