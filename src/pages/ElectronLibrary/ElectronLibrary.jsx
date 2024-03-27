import React, { useEffect, useState } from "react";
import "./ElectronLibrary.scss";
function ElectronLibrary() {
  const [books, setBooks] = useState([]);
  const data = [
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
    { img: "src/assets/image/header.png", title: "Əmək məcəlləsi" },
  ];
  async function getBooks() {
    const response = await fetch("http://localhost:3003/book");
    const data = await response.json();
    setBooks(data);
  }
  useEffect(() => {
    
  getBooks()
    
  }, [])
  
  return (
    <div className="library">
      <div className="library_container">
        <div className="library_container_top">
          <div className="library_container_top_header">
            <p>Elektron Kitabxana</p>
            <div className="lines">
              <div className="line One"></div>
              <div className="line Two"></div>
              <div className="line Three"></div>
              <div className="line Four"></div>
              <div className="line Five"></div>
            </div>
          </div>
          <div className="library_container_top_search">
            <input type="search" name="" id="" />
          </div>
        </div>
        <div className="library_container_main">
          {data.map((item) => (
            <div className="library_container_main_card">
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="bookTitle">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElectronLibrary;
