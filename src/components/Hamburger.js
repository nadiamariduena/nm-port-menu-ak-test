import React from "react";
// import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import gsap from "gsap";
//
//

const Hamburger = () => {
  // JSX DATA
  return (
    <div className="hamburger-menu">
      <div className="nav_menu-layer">
        <div className="nav_container">
          <div className="nav_wrapper">
            {/* ------- nav open -------- */}
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
              {/* the info we dont need */}
              <div className="info">
                <h3>Our Promise.</h3>
                <p>
                  “Man is least himself when he talks in his own person. Give
                  him a mask, and he will tell you the truth“.
                </p>
              </div>
              {/* the info we dont need */}
              <div className="locations">
                Locations:
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
            </div>
            {/* ------- nav open -------- */}
          </div>
        </div>
        {/* end container */}
      </div>
    </div>
  );
};

export default Hamburger;
