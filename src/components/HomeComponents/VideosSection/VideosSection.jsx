import React from "react";
import "./VideosSection.scss";

function VideosSection() {
  return (
    <div className="videosSection">
      <div className="videosSection_container">
        <div className="videosSection_header">
          <p className="videosSection_header_title">Videoçarxlar</p>
          <p className="videosSection_header_desc">
            Maarifləndirici <span>Videolar</span>
          </p>
          <div className="lines">
            <div className="line One"></div>
            <div className="line Two"></div>
            <div className="line Three"></div>
            <div className="line Four"></div>
            <div className="line Five"></div>
          </div>
        </div>
        <div className="videosSection_contents">
          <div className="videosSection_content">
            <div className="videosSection_content_video">
              <iframe
                width=""
                height=""
                src="https://www.youtube.com/embed/Aj_H5vvxXtw"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <p className="videosSection_content_title">
              Vəkillər Kollegiyasının 5 illik hesabat filmi
            </p>
          </div>
          <div className="videosSection_content">
            <div className="videosSection_content_video">
              {" "}
              <iframe
                width=""
                height=""
                src="https://www.youtube.com/embed/Aj_H5vvxXtw"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <p className="videosSection_content_title">
              Vəkillər Kollegiyasının 5 illik hesabat filmi
            </p>
          </div>
          <div className="videosSection_content">
            <div className="videosSection_content_video">
              {" "}
              <iframe
                width=""
                height=""
                src="https://www.youtube.com/embed/Aj_H5vvxXtw"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <p className="videosSection_content_title">
              Vəkillər Kollegiyasının 5 illik hesabat filmi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosSection;
