import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [isSideBarOpen, stickyNav]);

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      let windowHeight = window.scrollY;
      setStickyNav(windowHeight > 100);
      setIsSideBarOpen(false);
      setStickyNav((prevStickyNav) => {
        document.querySelector('.sidebar').style.top = prevStickyNav ? '0' : '45.5px';
        return prevStickyNav;
      });
    }
  };

  const options = ["Azərbaycan", "English", "Русский"];

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_upside_bg">
          <div className="navbar_upside">
            <img
              className="navbar_upside_img"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Heydar_Aliyev_%28crop%29.jpg"
              alt=""
            />
            <p className="navbar_upside_text">
              Azərbyacan Respublikası Vəkillər Kollegiyası Akademiyası
            </p>
            <img
              className="navbar_upside_flag"
              src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
              alt=""
            />
          </div>
        </div>
        <div className={`navbarBot  ${stickyNav ? "fixed" : ""}`}>
          <div className="navbarBot_bottom">
            <div className="navbarBot_logo">
              <img src="../src/assets/image/lawyerAcademia-logo.png" alt="" />
            </div>
            <ul className="navbarBot_navmenu">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Əsas səhifə
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/qanunvericilik"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Qanunvericilik
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/xeberler"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Xəbərlər
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jurnallar"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Jurnallar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/elektronKitabxana"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Elektron kitabxana
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/heyet"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Heyət
                </NavLink>
              </li>
            </ul>
            <div className="navbarBot_login_lang">
              <div className="navbarBot_lang">
                <div className={`select-header`} onClick={toggleDropdown}>
                  <div>{selectedOption || "Azərbaycan"}</div>
                  <i
                    className={`${
                      isOpen ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                    }`}
                  ></i>
                </div>
                {isOpen && (
                  <ul className="navbarBot_select">
                    {options.map((option, index) => (
                      <li
                        className="navbarBot_option"
                        key={index}
                        onClick={() => handleSelectChange(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="navbarBot_login">
                <i className="fa-solid fa-user"></i>
                <p>Şəxsi kabinet</p>
              </div>
              <i
                className="fa-solid fa-bars"
                onClick={() => setIsSideBarOpen(!isSideBarOpen)}
              ></i>
            </div>
          </div>
        </div>
        <div className={`sidebar ${isSideBarOpen ? "" : "isSideBarOpen"} `}>
          <div
            className="sidebar_exit"
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="sidebar_nav">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Əsas səhifə
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/qanunvericilik"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Qanunvericilik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/xeberler"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Xəbərlər
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jurnallar"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Jurnallar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/elektronKitabxana"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Elektron kitabxana
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/heyet"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#0176ff" : "",
                  };
                }}
              >
                Heyət
              </NavLink>
            </li>
          </ul>
          <div className="sidebar_login">
            <i className="fa-solid fa-user"></i>
            <p>Şəxsi kabinet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
