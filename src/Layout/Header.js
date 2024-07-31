import React from "react";
import logo from "./../../src/Asset/Images/logo.png";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="text-primary">
          <img
            src="logo2.png"
            alt="Logo"
            style={{ width: "50px", height: "50px", "margin-left": "50px" }}
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto"></ul>
      </div>
    </nav>
  );
}

export default Header;
