import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
//
//

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>

      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="wrapper">
          {/* -------nav -------- */}
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link to="/opportunities">Opportunities</Link>
                </li>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul>
            </nav>
            {/* -------nav -------- */}
            <div className="info">
              <h3>Our Promise.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, provident. Excepturi unde nostrum aut labore debitis
                tempore consequuntur enim ea?
              </p>
            </div>
            {/* --- */}
            <div className="locations">Locations:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
