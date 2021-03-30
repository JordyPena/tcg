import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styling/nav.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Nav({ searchBar, invalidSearch, invalidEntry, renderProps}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  console.log(renderProps)
  return (
    <>

     <div className="navbar">
       {!sidebar ?  <Link to="#" className="menu-bars" onClick={showSidebar}>
          <FaBars  />
        </Link> : <Link to="#" className="menu-bars" onClick={showSidebar}>
              <AiOutlineClose />
            </Link>}
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" >
          <li className="searchBar">
          {renderProps.location.pathname === "/" ? "" : searchBar}
          </li>
          {invalidSearch && (

          <li className="nav-text-red">
            {invalidSearch && invalidEntry}
          </li>
          )}
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/">
              <AiFillHome /> Home
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/about">
              <BsFillInfoCircleFill /> About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}