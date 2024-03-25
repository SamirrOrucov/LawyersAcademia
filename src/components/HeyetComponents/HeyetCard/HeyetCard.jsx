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

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

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
              <i
                onClick={() => handleCall(x.phone)}
                className="fa-solid fa-phone"
              ></i>
              <i
                onClick={() => handleEmailClick(x.email)}
                className="fa-regular fa-envelope"
              ></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HeyetCard;
