import React from "react";
import "./News.scss";
import NewsCard from "../../components/NewsComponents/NewsCard/NewsCard";

function News() {
  return (
    <div className="news">
      <div className="news_container">
        <div className="news_header">
          <p>Xəbərlər</p>
          <div className="lines">
            <div className="line One"></div>
            <div className="line Two"></div>
            <div className="line Three"></div>
            <div className="line Four"></div>
            <div className="line Five"></div>
          </div>
        </div>
        <div className="news_cards">
          <NewsCard/>
        </div>
      </div>
    </div>
  );
}

export default News;
