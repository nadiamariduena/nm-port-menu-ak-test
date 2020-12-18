import React, { useEffect, useRef } from "react";
// the useRef will gives us access to the hamburger-menu in the DOM
import { Link } from "react-router-dom";

//
//
// 1
// type: sfc snippet: const  = () => {
const Hamburger = ({ state }) => {
  // Here is how you access the state in the menuTwo.js :
  // const Hamburger = ({ state }) => {
  //
  //
  // 3
  let menu = useRef(null);

  //
  //
  //
  // 2     create the useEffect to access the states inside the MenuTwo.js
  //   uef snippet to create a useEffect
  //   the reason for the state fuunction not defined was due to the fact i forgot to make the connection inside the header here:    <Hamburger state={state} />
  useEffect(() => {
    if (state.clicked === false) {
      // if its not clicked ,HIDE the dropdown
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // if its clicked ,SHOW the dropdown
      menu.style.display = "block";
    }
  });
  //
  //

  // -------------------
  // JSX DATA
  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div className="nav_menu-layer">
        <div className="nav_menu-layer-wrapper">
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
                “Man is least himself when he talks in his own person. Give him
                a mask, and he will tell you the truth“.
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
    </div>
  );
};

export default Hamburger;
