import React, { useEffect, useState } from "react";
import "./VideosSection.scss";

function VideosSection() {
  const [video, setVideo] = useState([]);
  async function getVideoLinks() {
    const response = await fetch("http://localhost:3003/youtubeLinks");
    const data = await response.json();
    setVideo(data);
  }
  useEffect(() => {
    getVideoLinks();
  }, []);
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
          {video.map((item) => (
            <div key={item._id} className="videosSection_content">
              <div className="videosSection_content_video">
                <iframe
                  width=""
                  height=""
                  src={item.link}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="videosSection_content_title">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideosSection;
