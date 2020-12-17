import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

const Header = () => {
  // STATE FOR MENU BUTTON

  return (
    <header>
      <div className="nav_container">
        <div className="nav_wrapper">
          {/* the inner header is the 100px box where the logo and the menu button are situated */}
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HANBRG</Link>
            </div>
            {/* ---------- */}
            <div className="menu">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
};

export default Header;
// withRouter will give access to the history PROP
// with the history we will be able to determine if the URL has been changed, so
// if it s change we will execute a certain command
