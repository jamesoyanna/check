import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [HamClick, setHamClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setHamClick(false)}
          >
            L O G O
          </Link>
          <div className="menu-icon">
            <i
              onClick={() => setHamClick(!HamClick)}
              className={HamClick ? "fas fa-times-circle" : "fas fa-database"}
            ></i>
          </div>
          <ul className={HamClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/"
                onClick={() => setHamClick(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/data"
                onClick={() => setHamClick(false)}
              >
                Data
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
