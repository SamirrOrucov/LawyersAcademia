import React, { useEffect, useState } from "react";
import "./NewsCard.scss";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function NewsCard() {
  const [newsCard, setNewsCard] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = newsCard.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsCard.length / itemsPerPage);

  function getFetchNews() {
    fetch("http://localhost:3003/news")
      .then((res) => res.json())
      .then((data) => setNewsCard(data));
  }
  useEffect(() => {
    getFetchNews();
  }, []);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsCard.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {currentItems.map((x) => (
        <div className="newsCard">
          <div className="newsCard_img">
            <img src={x.mainImage} alt="" />
          </div>
          <div className="newsCard_info">
            <div className="newsCard_info_textBox">
              <p className="newsCard_title">{x.title}</p>
              <p className="newsCard_date">{x.createdAt.slice(0, 10)}</p>
            </div>
            <div className="newsCard_info_btn">
              <p className="newsCard_link">
              <Link to={"/detail/" + x._id}>Daha ətraflı </Link>
              </p>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<FaChevronLeft/>}
        renderOnZeroPageCount={null} 
        activeLinkClassName={' activePage '}
        className="ReactPaginate"
      />
    </>
  );
}

export default NewsCard;
