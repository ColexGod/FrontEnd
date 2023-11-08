import React from "react";
import "../globals.css";
import logo from "../../../public/LOGO-STREAM_HEAVEN.png";

const Header = () => {
  return (
    <header>
      <div class="logo-nav">
        <div class="logo">
          <img src={logo.src} />
        </div>
        <nav>
          <ul class="nav">
            <li>
              <a href="">Accueil</a>
            </li>
            <li>
              <a href="">Films</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="search-bar">
        <input type="search" placeholder="Cherchez ici" />
        <button>Chercher</button>
      </div>
    </header>
  );
};

export default Header;
