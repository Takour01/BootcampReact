import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <p className="logo">logo2</p>
      <div className="nav__list">
        <a href="/" className="nav__link">
          page 1
        </a>
        <a href="/second" className="nav__link">
          page 2
        </a>
        <a href="/third" className="nav__link">
          page 3
        </a>
      </div>
    </div>
  );
}
