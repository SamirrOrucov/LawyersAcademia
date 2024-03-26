import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdLink } from "react-icons/md";
import "./QanunvericilikDetail.scss";
function QanunvericilikDetail() {
  const { id } = useParams();
  const [law, setLaw] = useState([]);
  const [legislation, setLegislation] = useState([]);
  async function getLegislation() {
    const response = await fetch("http://localhost:3003/legislation/" + id);
    const data = await response.json();
    setLegislation(data);
  }
  async function getLaw() {
    const response = await fetch(
      "http://localhost:3003/legislation/withLaws/" + id
    );
    const data = await response.json();
    setLaw(data);
  }
  useEffect(() => {
    getLaw();
    getLegislation();
  }, []);

  return (
    <>
      <div className="qanunvericilikDetail">
        <div className="qanunvericilikDetail_container">
          <div className="qanunvericilikDetail_container_header">
            {
              <p>
                <Link to={"/qanunvericilik"}>Qanunvericilik</Link> /
                <span> {legislation.title}</span>
              </p>
            }
          </div>
          <div className="qanunvericilikDetail_container_main">
            <p className="headOfMain">{legislation.title}</p>
            {law.length
              ? law.map((item) => (
                  <div className="qanunvericilikDetail_container_main_links">
                    <MdLink className="linIcon" />{" "}
                    <Link to={item.link}>{item.title}</Link>
                  </div>
                ))
              : <Link to={"/qanunvericilik"}><h4>Məlumat yoxdur!</h4></Link> }
          </div>
        </div>
      </div>
    </>
  );
}

export default QanunvericilikDetail;
