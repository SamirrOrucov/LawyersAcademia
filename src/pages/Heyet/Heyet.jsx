import React from "react";
import "./Heyet.scss";
import HeyetCard from "../../components/HeyetComponents/HeyetCard/HeyetCard";

function Heyet() {
  return (
    <div className="heyet">
      <div className="heyet_container">
        <div className="heyet_header">
          <p>Heyət</p>
          <div className="lines">
            <div className="line One"></div>
            <div className="line Two"></div>
            <div className="line Three"></div>
            <div className="line Four"></div>
            <div className="line Five"></div>
          </div>
        </div>
        <div className="heyetCards">
        <HeyetCard/>
        </div>
      </div>
    </div>
  );
}

export default Heyet;
