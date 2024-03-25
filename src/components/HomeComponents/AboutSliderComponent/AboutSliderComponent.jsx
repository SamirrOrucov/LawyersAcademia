import React, { useEffect, useState } from "react";
import "./AboutSliderComponent.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
function AboutSliderComponent() {
  const [newsData, setNewsData] = useState([]);
  async function getNews() {
    try {
      const response = await fetch("http://localhost:3003/news");
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await response.json();

      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setNewsData(sortedData);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

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
          {newsData.slice(0, 5).map((item) => (
            <SwiperSlide className="swiper_slide">
              <img
                src={item.mainImage}
                alt="Xəbər haqqında foto"
              />
            
              <Link to={"/detail/" + item._id}>
                <div className="aboutSlider_btn">
                  <button>
                    Daha <span>ətraflı</span>
                  </button>
                  <div className="hoverOne"></div>
                  <div className="hoverTwo"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutSliderComponent;
