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
            <Link to={"/"}>
              <div className="aboutSlider_btn">
                <button>
                  Daha <span>ətraflı</span>
                </button>
                <div className="hoverOne"></div>
                <div className="hoverTwo"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
            <Link to={"/"}>
              <div className="aboutSlider_btn">
                <button>
                  Daha <span>ətraflı</span>
                </button>
                <div className="hoverOne"></div>
                <div className="hoverTwo"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
            <Link to={"/"}>
              <div className="aboutSlider_btn">
                <button>
                  Daha <span>ətraflı</span>
                </button>
                <div className="hoverOne"></div>
                <div className="hoverTwo"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
            <Link to={"/"}>
              <div className="aboutSlider_btn">
                <button>
                  Daha <span>ətraflı</span>
                </button>
                <div className="hoverOne"></div>
                <div className="hoverTwo"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide">
            <img
              src="https://www.e-huquq.az/media/2022/08/17/vekillerkollegiyasi2.jpg"
              alt=""
            />
            <div className="text">
              Kollegiyanın üzvü, professor, hüquq elmləri doktoru Əmir Əliyevin
              Akademiyanın rəhbəri təyin edilib.
            </div>
            <Link to={"/"}>
              <div className="aboutSlider_btn">
                <button>
                  Daha <span>ətraflı</span>
                </button>
                <div className="hoverOne"></div>
                <div className="hoverTwo"></div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default AboutSliderComponent;
