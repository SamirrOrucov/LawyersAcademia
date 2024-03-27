import React from "react";
import "./ElectronLibraryDetail.scss";
import { useParams } from "react-router-dom";
function ElectronLibraryDetail() {
  const { id } = useParams();
  return (
    <div className="libraryDetail">
      <div className="libraryDetail_container">
        <div className="libraryDetail_container_top">
          {/* { */}
          <p>
            <Link to={"/library"}>Elektron Kitabxana</Link> /
            <span> Kitab adı</span>
          </p>
          {/* } */}
        </div>
        <div className="libraryDetail_container_main">
          <div className="libraryDetail_container_container_main_left">
            <img src="" alt="" />
          </div>
          <div className="libraryDetail_container_container_main_right">
            <p className="title">title</p>
            <p className="detail">detail</p>
            <p className="author">
              {" "}
              <span className="bold">Müəllif</span> Əmir Əliyev
            </p>
            <p className="date">
              {" "}
              <span className="bold">Nəşr tarixi</span> 2013
            </p>
            <div className="button">
              <button>Kitabı yüklə</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronLibraryDetail;
