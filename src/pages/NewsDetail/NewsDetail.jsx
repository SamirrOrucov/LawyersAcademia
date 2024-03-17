import React, { useEffect, useState } from "react";
import "./NewsDetail.scss";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams();
  const [newsDetailCard, setNewsDetailCard] = useState([]);

  function getFetchNews() {
    fetch("http://localhost:3003/news/" + id)
      .then((res) => res.json())
      .then((data) => setNewsDetailCard(data));
  }
  useEffect(() => {
    getFetchNews();
  }, []);
  return (
    <div className="newsDetail">
      <div className="newsDetail_container">
        <div className="newsDetail_main">
          <div className="newsDetail_header">
            <p className="newsDetailCard_title">{newsDetailCard.title}</p>
            <div className="lines">
              <div className="line One"></div>
              <div className="line Two"></div>
              <div className="line Three"></div>
              <div className="line Four"></div>
              <div className="line Five"></div>
            </div>
          </div>
          <div className="newsDetail_date">
            <i className="fa-regular fa-calendar-days"></i>
            <p className="newsDetailCard_date">
              {newsDetailCard.createdAt &&
                newsDetailCard.createdAt.slice(0, 10)}
            </p>
          </div>
          <div className="newsDetailCard_img">
            <img src={newsDetailCard.mainImage} alt="" />
          </div>
          <p className="newsDetailCard_content">{newsDetailCard.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
