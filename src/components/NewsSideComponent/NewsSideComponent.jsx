import React from "react";
import "./NewsSideComponent.scss";
import { Link } from "react-router-dom";
function NewsSideComponent() {
  const news = [
    {
      img: "https://barassociation.az/img/document.jpg",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/img/document.jpg",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
    },
  ];
  return (
    <div className="newsSideComponent">
      <div className="newsSideComponent_container">
        <div className="newsSideComponent_container_cards">
          {news.splice(0, 10).map((item) => (
            <div className="newsSideComponent_container_cards_card">
              <div className="newsPhoto">
                <img src={item.img} alt="" />
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
