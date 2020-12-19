import React, { useEffect, useRef } from "react";
// the useRef will gives us access to the hamburger-menu in the DOM
import { Link } from "react-router-dom";
import gsap from "gsap";
//
//
// 1
// type: sfc snippet: const  = () => {
const Hamburger = ({ state }) => {
  // Here is how you access the state in the menuTwo.js :
  // const Hamburger = ({ state }) => {

  //
  //
  //
  //
  // 3
  // START WITH GSAP animation
  //
  let menu = useRef(null);
  let revealMenu = useRef(null);
  // the following represent the 3 navigation inside the nav open
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  //
  let info = useRef(null);
  // after declaring the refs, assign them in the jsx/dom to all:  ref={(el) => (menu = el)}
  // the "el / elements" that are going to be animate

  //
  //
  //
  //
  //
  //
  // 2     create the useEffect to access the states inside the MenuTwo.js
  //   uef snippet to create a useEffect
  //   the reason for the state function not defined was due to the fact i forgot to make the connection inside the header here:    <Hamburger state={state} />
  useEffect(() => {
    if (state.clicked === false) {
      // if its not clicked ,HIDE/CLOSE the dropdown
      gsap.to(revealMenu, {
        duration: 0.5,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.01,
        },
      });
      gsap.to(menu, {
        duration: 1,
        //its at one because its waiting for the animation above, to be completed
        //  if i added duration: 0, it s the same as clicking on and off, there s no animation, because i would have ended it before start
        css: { display: "none" },
      });
      //---------------------
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // if its clicked ,SHOW the dropdown
      gsap.to(menu, {
        duration: 0,
        //its at one because its waiting for the animation above, to be completed
        //  if i added duration: 0, it s the same as clicking on and off, there s no animation, because i would have ended it before start
        css: { display: "block" },
      });
      gsap.to([revealMenu], {
        duration: 0, //it will do it as soon as it s clicked
        opacity: 1,
        height: "100%",
      });
      //---------------------
      staggerReveal(revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);

      //---------------------
    }
  }, [state]); //we need to wait the state to be finish or has change
  //  before it runs the useEffect, he used this because without the effect of the
  // skew is a bit broken when the dropdown reaches the 100%
  //
  //
  //  info
  const staggerReveal = (node1) => {
    gsap.from(node1, {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top", // will slightly rotate the nav with the help of the skew: 2
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.9,
      },
    });
  };
  //
  // line 1, 2 ,3
  //
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 1.5,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.9, //each line will take a bit time to show,
        // if you add 0.1 it will look like all the 3 lines come
        // at the same time, that s why i dont like it
      },
    });
  };
  //
  // paragraph 'info'
  //
  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1.5,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };
  //
  //
  //
  // BOUNCING TEXT EFFECT
  const handleHoverBouncer = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };
  const handleHoverBouncerExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  //
  //
  //

  // -------------------
  // JSX DATA
  return (
    // liked to step 3
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div ref={(el) => (revealMenu = el)} className="nav_menu-layer">
        <div className="nav_menu-layer-wrapper">
          {/* ------- nav open -------- */}
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHoverBouncer(e)}
                    onMouseOut={(e) => handleHoverBouncerExit(e)}
                    ref={(el) => (line1 = el)}
                    to="/opportunities"
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHoverBouncer(e)}
                    onMouseOut={(e) => handleHoverBouncerExit(e)}
                    ref={(el) => (line2 = el)}
                    to="/solutions"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={(e) => handleHoverBouncer(e)}
                    onMouseOut={(e) => handleHoverBouncerExit(e)}
                    ref={(el) => (line3 = el)}
                    to="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            {/* the info we dont need */}
            <div ref={(el) => (info = el)} className="info">
              <h3>Our Promise.</h3>
              <p>
                “Man is least himself when he talks in his own person. Give him
                a mask, and he will tell you the truth“.
              </p>
            </div>
            {/* the info we dont need */}
            <div className="locations">
              Follow:
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
