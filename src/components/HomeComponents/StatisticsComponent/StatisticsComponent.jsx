import React, { useEffect, useState } from "react";
import { GrArticle } from "react-icons/gr";
import "./StatisticComponent.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function StatisticsComponent() {
  const [countOn, setCountOn] = useState(false);
  const [article, setArticle] = useState([]);
  async function getArticleCount() {
    const response = await fetch("http://localhost:3003/articleCount");
    const data = await response.json();
    setArticle(data);
  }
  useEffect(() => {
    getArticleCount();
  }, []);

  return (
    <div className="statisticsComponent">
      <div className="statisticsComponent_container">
        <div className="headOfStatistics">
          <p className="factsFirst">Statistika</p>
          <p className="factsSecond">
            Böyük <span>nailiyyətimizə</span> görə çox qürur duyuruq!
          </p>

          <div className="lines">
            <div className="line One"></div>
            <div className="line Two"></div>
            <div className="line Three"></div>
            <div className="line Four"></div>
            <div className="line Five"></div>
          </div>
        </div>

        <div className="statisticCards">
          {article.map((item) => (
            <div key={item._id} className="statisticCard">
              <div className="number">
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <h3>
                    {countOn && (
                      <CountUp
                        start={0}
                        end={item.count}
                        delay={0.2}
                        duration={2}
                      />
                    )}
                  </h3>
                </ScrollTrigger>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticsComponent;
