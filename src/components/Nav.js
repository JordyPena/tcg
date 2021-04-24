import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Themes from "../components/Themes";

export default function Nav({
  searchBar,
  renderProps,
  errorMessage,
}) {
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
          <li className="searchBar">
            {errorMessage === true ? <p>Can only search by pokemon name ie: blastoise</p> : ""}
            {renderProps.location.pathname === "/" ? "" : searchBar}
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/">
              <AiFillHome /> Home
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/sets">
              Sets
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/about">
              <BsFillInfoCircleFill /> About
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
