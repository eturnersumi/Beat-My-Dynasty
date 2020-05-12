import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul>
          <li>
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
          <li>
            <Link
              to="/manual"
              className={window.location.pathname === "/manual"
                ? "nav-link active"
                : "nav-link"
              }
              >
              Start Playing
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav2;
