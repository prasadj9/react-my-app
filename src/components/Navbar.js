import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/switch">
            Condition Render
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/event">
            Handle Event
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/expandabletext">
            Expandable Text
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/randomcolor">
            Random Color
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/lazyload">
            Lazy Loading
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/useref">
            useRef Exapmle
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
