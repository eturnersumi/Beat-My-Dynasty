import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Profile
              </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manual"
              className={window.location.pathname === "/manual"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Manual Simulation
              </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/computer"
              className={window.location.pathname === "/computer"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Computer Simulation
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav2;
