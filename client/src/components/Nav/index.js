import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="nav">
      <div>
        <ul id="ulnav">
          <li className="nav-item" id="signup">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signup"
                ? "nav-link act"
                : "nav-link"
              }
              >
              Sign Up
              </Link>
          </li>
          <li className="nav-item" id="signin">
            <Link
              to="/signin"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signin"
                ? "nav-link act"
                : "nav-link"
              }
              >
              Sign In
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
