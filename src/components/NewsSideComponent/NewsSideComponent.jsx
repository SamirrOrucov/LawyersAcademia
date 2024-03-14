import React, { useEffect, useState } from "react";
import "./NewsSideComponent.scss";
import { Link } from "react-router-dom";
function NewsSideComponent() {
  const [newsData, setNewsData] = useState([]);
  async function getNews() {
    try {
      const response = await fetch("http://localhost:3003/news");
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await response.json();
      console.log(data);
      const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setNewsData(sortedData);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="newsSideComponent">
      <div className="newsSideComponent_container">
        <div className="newsSideComponent_container_cards">
          {newsData.slice(0, 10).map((item) => (
            <div className="newsSideComponent_container_cards_card">
              {console.log(item)}
              <div className="newsPhoto">
                <img src={item.mainImage} alt="" />
              </div>
              <div className="newsInfo">
                <div className="title">{item.title}</div>
                <div className="link">
                  <Link>Daha ətraflı..</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSideComponent;
