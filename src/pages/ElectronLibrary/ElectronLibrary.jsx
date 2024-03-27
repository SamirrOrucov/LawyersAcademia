import React, { useEffect, useState } from "react";
import "./ElectronLibrary.scss";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import { Select } from "antd";

function ElectronLibrary() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  async function getBooks() {
    const response = await fetch("http://localhost:3003/book");
    const data = await response.json();
    setIsSearching(true);
    setBooks(data);
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const onSearch = (value, e, info) => {
    setIsSearching(true);
    const filteredBooksArray = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredBooksArray.length === 0) {
      setTimeout(() => {
        setNoResults(true);
      }, 1000);
    } else {
      setNoResults(false);
      setFilteredBooks(filteredBooksArray);
    }
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };
  return (
    <div className="library">
      <div className="library_container">
        <div className="library_container_top">
          <div className="library_container_top_header">
            <div className="library_container_top_text">
              <p>Elektron Kitabxana</p>
            </div>
            <div className="lines">
              <div className="line One"></div>
              <div className="line Two"></div>
              <div className="line Three"></div>
              <div className="line Four"></div>
              <div className="line Five"></div>
            </div>
          </div>
          <div className="library_container_top_search">
            <Select
              mode="tags"
              style={{
                width: "200px",
              }}
              placeholder="Kateqoriyalar"
              onChange={handleChange}
              options={options}
            />
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: "240px",
              }}
              enterButton
            />
            {noResults && <p>Sorry this book does not exist</p>}
          </div>
        </div>
        {isSearching ? (
          <div className="loader_container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="library_container_main">
            {filteredBooks.length > 0
              ? filteredBooks.map((item) => (
                  <div key={item._id} className="library_container_main_card">
                    <div className="image">
                      <img src={item.bookPhoto} alt="" />
                      <Link to={"/library/" + item._id}>
                        <button className="hiddenButton">Keçid et</button>
                      </Link>
                    </div>
                    <div className="bookTitle">
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))
              : books.map((item) => (
                  <div key={item._id} className="library_container_main_card">
                    <div className="image">
                      <img src={item.bookPhoto} alt="" />
                      <Link to={"/library/" + item._id}>
                        <button className="hiddenButton">Keçid et</button>
                      </Link>
                    </div>
                    <div className="bookTitle">
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ElectronLibrary;
