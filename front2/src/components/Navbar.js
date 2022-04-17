import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" id="navbar-brand">
            Mars Roverland
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link" href="#" id="home">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="myfave">
                  My Favorites
                </a>
              </li>
              <li className="nav-item">
                <Link to="/Curiosity" style={{ textDecoration: "none" }}>
                  <a className="nav-link" href="#" id="myfave">
                    Curiosity
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Opportunity" style={{ textDecoration: "none" }}>
                  <a className="nav-link" id="myfave">
                    Opportunity
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Spirit" style={{ textDecoration: "none" }}>
                  <a className="nav-link" href="#" id="myfave">
                    Spirit
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Curiosity" style={{ textDecoration: "none" }}>
                  <a className="nav-link" href="#" id="myfave">
                    Log In
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
