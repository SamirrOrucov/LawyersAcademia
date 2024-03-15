import React from "react";
import "./NewsCard.scss";
import { Link } from "react-router-dom";

function NewsCard() {
  const news = [
    {
      img: "https://barassociation.az/img/document.jpg",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/img/document.jpg",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
    {
      img: "https://barassociation.az/uploads/publications/samples_95eb9697d3a31d82026897c11d19659b.png",
      title:
        "“Biz gələcəyin vəkilləriyik” adlı qış məktəbinin təlimləri keçirilib",
      date: "15 mart 2024",
    },
  ];
  return (
    <>
      {news.map((x) => (
        <div className="newsCard">
          <div className="newsCard_img">
            <img src={x.img} alt="" />
          </div>
          <div className="newsCard_info">
            <div className="newsCard_info_textBox">
              <p className="newsCard_title">{x.title}</p>
              <p className="newsCard_date">{x.date}</p>
            </div>
            <div className="newsCard_info_btn">
              <p className="newsCard_link">
                <Link>Daha ətraflı </Link>
              </p>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewsCard;
