import React, { useEffect, useState } from "react";
import "./ElectronLibraryDetail.scss";
import { Link, useParams } from "react-router-dom";
function ElectronLibraryDetail() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  async function getBooks() {
    const response = await fetch("http://localhost:3003/book/" + id);
    const data = await response.json();
    // setIsSearching(true);
    setBook(data);
    // setTimeout(() => {
    //   setIsSearching(false);
    // }, 1000);
  }

  useEffect(() => {
    getBooks();
  }, []);
  console.log(book);
  return (
    <div className="libraryDetail">
      <div className="libraryDetail_container">
        <div className="libraryDetail_container_top">
          <p>
            <Link to={"/library"}>Elektron Kitabxana</Link> /
            <span> {book.title}</span>
          </p>
        </div>
        <div className="libraryDetail_container_main">
          <div className="libraryDetail_container_main_left">
            <img className="bookFace" src={book.bookPhoto} alt="" />
          </div>
          <div className="libraryDetail_container_main_right">
            <p className="title">{book.title}</p>
            <p className="detail">{book.description}</p>
            <p className="author">
              <span className="bold">Müəllif :</span> {book.author}
            </p>
            <p className="date">
              {" "}
              <span className="bold">Nəşr tarixi :</span> 2013
            </p>
            <div className="button">
              <a href={book.bookFile} download={"bookFile"}>
                {" "}
                <button class="button-30" role="button">Kitabı yüklə</button>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronLibraryDetail;
