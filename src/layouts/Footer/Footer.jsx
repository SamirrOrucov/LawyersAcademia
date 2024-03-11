import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  const phoneNumber = "+9940125949985"; 
  const emailAddress = "academy@barassociation.az";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_upside">
          <div className="footer_contact">
            <div className="footer_contact_icons">
              <div className="footer_contact_location">
                <i className="fa-solid fa-location-dot"></i>
                <p>Səməd Vurğun küçəsi, 48</p>
              </div>
              <div className="footer_contact_phone">
                <i onClick={handleCall} className="fa-solid fa-phone"></i>
                <p>+994 012 594 99 85</p>
              </div>
              <div className="footer_contact_email">
                <i
                  onClick={handleEmailClick}
                  className="fa-regular fa-envelope"
                ></i>
                <p>academy@barassociation.az</p>
              </div>
            </div>
            <div className="footer_social">
              <div className="footer_social_insta">
                <Link
                  to={
                    "https://www.instagram.com/azerbaijanibarassociation/?igsh=bTYzczNvamtsajAw"
                  }
                >
                  <i className="fa-brands fa-instagram"></i>{" "}
                </Link>
                {/* <p>@azerbaijanibarassociation</p> */}
              </div>
              <div className="footer_social_fb">
                <Link to={"https://www.facebook.com/academy.azerbaijani.bar"}>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                {/* <p>academy.azerbaijani.bar</p> */}
              </div>
              <div className="footer_social_yb">
                <Link to={"https://www.youtube.com"}>
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                {/* <p>ndhjshdjhskdjsd</p> */}
              </div>
            </div>
            <div className="footer_contact_link">
              <Link to={"https://barassociation.az/"}>
                <img
                  src="../src/assets/image/vekiller-kollegiyasi.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="footer_location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5041790888286!2d49.841325000000005!3d40.375517099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da571cb4ffb%3A0x908ca2d7a38ea0!2s48%20Samad%20Vurgun%2C%20Baku!5e0!3m2!1sen!2saz!4v1710084394242!5m2!1sen!2saz"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="footer_underside">
          <p>domain ©2024 Müəllif Hüquqları Qorunur</p>
          <p>
            Made by <span>gradiant.tech</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
