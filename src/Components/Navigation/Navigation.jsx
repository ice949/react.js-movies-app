import React from 'react'
import './Navigation.css';
import { FaSearch, FaHome, FaHeart, FaSun } from "react-icons/fa";

const Navigation = ({toggleMode, modeColor}) => {

  return (
    <div className="Navigation">
      <nav className="NavigationComponent">
        <ul className="nav-container">
            <li className="nav-element">
                <a href="/" activeStyle="true" className={modeColor}>
                    <FaHome />
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true" className={modeColor}>
                    <FaSearch />
                </a>
            </li>
            <li className="nav-element" >
                <a href="/" activeStyle="true" className={modeColor}>
                    <FaHeart />
                </a>
            </li>
            <li className="nav-element">
                <a href="#" activeStyle="true" onClick={() => {toggleMode()}} className={modeColor}>
                    <FaSun />
                </a>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navigation;
