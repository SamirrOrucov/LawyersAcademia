import React from "react";
import "./VideosSection.scss";

function VideosSection() {
  return (
    <div className="videosSection">
      <div className="videosSection_container">
        <div className="videosSection_header">
          <p className="videosSection_title">VİDEOÇARXLAR</p>
          <div className="line"></div>
        </div>
        <div className="videosSection_contents">
          <div className="videosSection_content">
            <div className="video"></div>
            <p className="videosSection_content_title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="videosSection_content">
            <div className="video"></div>
            <p className="videosSection_content_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="videosSection_content">
            <div className="video"></div>
            <p className="videosSection_content_title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosSection;
