import React, { useEffect, useState } from "react";
import "./HeyetCard.scss";

function HeyetCard() {
  const [teamCard, setTeamCard] = useState([]);

  function getFetchTeam() {
    fetch("http://localhost:3003/teams")
      .then((res) => res.json())
      .then((data) => setTeamCard(data));
  }
  useEffect(() => {
    getFetchTeam();
  }, []);

  return (
    <>
      {teamCard.map((x) => (
        <div className="heyetCard">
          <div className="heyetCard_img">
            <img src={x.profilImage} alt="" />
          </div>
          <div className="heyetCard_textBox">
            <p className="heyetCard_textBox_name">{x.name}</p>
            <p className="heyetCard_textBox_job">{x.role}</p>
            <div className="heyetCard_textBox_social">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HeyetCard;
