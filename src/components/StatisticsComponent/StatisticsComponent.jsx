import React, { useState } from "react";
import { GrArticle } from "react-icons/gr";
import "./StatisticComponent.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function StatisticsComponent() {
  const [countOn, setCountOn] = useState(false);
  let x = 999;
  return (
    <div className="statisticsComponent">
      <div className="statisticsComponent_container">
        <div className="headOfStatistics">
          <p className="factsFirst">Statistika</p>
          <p className="factsSecond">
            Böyük <span>nailiyyətimizə</span> görə çox qürur duyuruq!
          </p>

          <div className="line"></div>
        </div>
        <div className="statisticCards">
          <div className="statisticCard">
            <div className="number">
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                <h3>
                  {countOn && (
                    <CountUp start={0} end={x} delay={0.2} duration={2} />
                  )}
                </h3>
              </ScrollTrigger>
            </div>
            <p>Cari ildə qeydiyyatdan keçmiş məqalələr </p>
          </div>
          <div className="statisticCard">
            <div className="number">
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                <h3>
                  {countOn && (
                    <CountUp start={0} end={x} delay={0.2} duration={2} />
                  )}
                </h3>
              </ScrollTrigger>
            </div>
            <p>Qeydiyyatdan keçmiş məqalələr</p>
          </div>
          <div className="statisticCard">
            <div className="number">
              <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
              >
                <h3>
                  {countOn && (
                    <CountUp start={0} end={x} delay={0.2} duration={2} />
                  )}
                </h3>
              </ScrollTrigger>
            </div>
            <p>Ümümilikdə çıxmış jurnal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsComponent;
