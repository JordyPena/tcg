import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GiCardRandom } from "react-icons/gi";
import Themes from "../components/Themes";

export default function Nav({ searchBar, renderProps, errorMessage }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <div className="left-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/oranguru.png`}
            className="nav-img"
            alt="pokemon"
          />
          <p className="left-container-text">Pokémon TCG Guru</p>
        </div>

        {!sidebar ? (
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaBars />
          </Link>
        ) : (
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <AiOutlineClose />
          </Link>
        )}
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {renderProps.location.pathname === "/" ? (
            ""
          ) : errorMessage === true ? (
            <p className="errorMessage">
              Can only search by Pokémon name ie: blastoise
            </p>
          ) : (
            ""
          )}

          <li className="searchBar">
            {renderProps.location.pathname === "/" ? "" : searchBar}
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/">
              <AiFillHome className="link-style" />{" "}
              <p className="dark-mode-style">Home</p>
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/sets">
              <GiCardRandom className="link-style" />{" "}
              <p className="dark-mode-style">Sets</p>
            </Link>
          </li>

          <li className="nav-text" onClick={showSidebar}>
            <Link to="/about">
              <BsFillInfoCircleFill className="link-style" />{" "}
              <p className="dark-mode-style">About</p>
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Themes />
          </li>
        </ul>
      </nav>
    </>
  );
}
