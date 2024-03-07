import React from "react";
import AboutSliderComponent from "../AboutSliderComponent/AboutSliderComponent";
import StatisticsComponent from "../StatisticsComponent/StatisticsComponent";
import NewsSideComponent from "../NewsSideComponent/NewsSideComponent";
import "./AboutSliderSection.scss"
function AboutSliderSection() {
  return (
    <div className="aboutSliderSection">
      <div className="aboutSliderSection_container">
        <div className="aboutSliderSection_container_aboutSide">
          <AboutSliderComponent />
          <StatisticsComponent />
        </div>
        <div className="aboutSliderSection_container_newsSide">
            <NewsSideComponent/>
        </div>
      </div>
    </div>
  );
}

export default AboutSliderSection;
