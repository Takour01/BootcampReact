import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <p className="logo">logo</p>
      <div className="nav__list">
        <Link to="/" className="nav__link">
          page 1
        </Link>
        <Link to="/second" className="nav__link">
          page 2
        </Link>
        <Link to="/third" className="nav__link">
          page 3
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
