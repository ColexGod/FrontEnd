import React from "react";
import "../globals.css";
import logo from "../../../public/LOGO-STREAM_HEAVEN.png";
import img_online from "../../../public/img_online.png";
import img_offline from "../../../public/img_offline.png";

const Header = ({ onLoginClick }) => {
  return (
    <header>
      <div class="logo-nav">
        <div class="logo">
          <img src={logo.src} />
        </div>
        <nav>
          <ul class="nav">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">MOVIES</a>
            </li>
            <li>
              <a href="#" onClick={onLoginClick}>
                ACCOUNT
              </a>
              <img src={img_offline.src} />
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
