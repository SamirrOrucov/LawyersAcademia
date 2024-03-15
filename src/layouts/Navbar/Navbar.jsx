import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Select } from "antd";
const { Option } = Select;

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyNav(true) : setStickyNav(false);
    }
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="navbar">
      <div className="navbar_container">
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
                  to="/haqqimizda"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Haqqımızda
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
              
            </ul>
            <div className="navbarBot_login_lang">
              <div className="navbarBot_lang">
                <Select
                  defaultValue="Azərbaycan"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  className="navbarBot_lang_select"
                >
                  <Option className="navbarBot_lang_option" value="aze">Azərbaycan</Option>
                  <Option value="eng">English</Option>
                  <Option value="rus">Русский</Option>
               
                </Select>
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
                  to="/haqqimizda"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#0176ff" : "",
                    };
                  }}
                >
                  Haqqımızda
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
