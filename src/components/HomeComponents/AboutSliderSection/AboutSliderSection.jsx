import React from "react";
import AboutSliderComponent from "../AboutSliderComponent/AboutSliderComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";
import NewsSideComponent from "../NewsSideComponent/NewsSideComponent";
import "./AboutSliderSection.scss";
function AboutSliderSection() {
  return (
    <div className="aboutSliderSection">
      <div className="headOfStatistics">
        <p className="factsFirst">Xəbərlər</p>
        <p className="factsSecond">
          Hər gün yeni <span>Xəbər</span> !
        </p>

        <div className="lines">
          <div className="line One"></div>
          <div className="line Two"></div>
          <div className="line Three"></div>
          <div className="line Four"></div>
          <div className="line Five"></div>
        </div>
      </div>
      <div className="aboutSliderSection_container">
        <div className="aboutSliderSection_container_aboutSide">
          <div>
            <AboutSliderComponent />
            <StatisticsComponent />
          </div>
        </div>
        <div className="aboutSliderSection_container_newsSide">
          <NewsSideComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutSliderSection;
