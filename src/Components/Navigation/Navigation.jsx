import React from 'react'
import './Navigation.css';
import { FaSearch, FaHome, FaHeart, FaSun } from "react-icons/fa";

const Navigation = ({toggleMode}) => {
  return (
    <div className="Navigation">
      <nav className="NavigationComponent">
        <ul className="nav-container">
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaHome />
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaSearch />
                </a>
            </li>
            <li className="nav-element">
                <a href="/" activeStyle="true">
                    <FaHeart />
                </a>
            </li>
            <li className="nav-element">
                <a href="#" activeStyle="true" onClick={() => {toggleMode()}}>
                    <FaSun />
                </a>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navigation;
