import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul>
          <li>
            <Link
              to="/signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signup"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Sign-Up
              </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signin"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Sign-In
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
