# TESTING the NM portfolio with the wrong akram from 0

##### YESTERDAY i tried to add it directly to the nm portofolio i ve been working on, and it didn't work because it was to complicated to do it with so much data related to the scrolling effect on the page So i started it from scratch

#### START by Installing the dependencies 👷‍♂️

[check out the installation](src/docs/INSTALLATION.md)

##### CHECK THE SNIPPETS TO MAKE IT EASIER

[check out the installation](src/docs/INSTALLATION.md)

<br>
<br>
<br>
<br>
<br>
<br>

# THE SET UP of the routers

```javascript
//
//
//  STEP 1
//
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
//
//  STEP 2
//
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              // ------------------- this is related to step 3
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
              // ------------------- this is related to step 3
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

//
//
//  STEP 3

function Opportunities() {
  // you can import the content component of this page "Opportunities"
  //   This is similar to what you have inside the .menuOPen in the other dropdown menu
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default App;
```

<br>
<br>

#### CONTENT of the Hamburger.js

- YOU WILL NOT NEED ALL THIS later for out project

<br>

```javascript
import React from "react";
import { Link } from "react-router-dom";

//
//
//
//
import React from "react";

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
```

<br>
<br>

#### Content of the Header.js

```javascript
import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

const Header = () => {
  // STATE FOR MENU BUTTON

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HANBRG</Link>
            </div>
            {/* ---------- */}
            <div className="menu">
              <button>fff</button>
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
```

<br>
<br>

### How it should look on the Browser

[<img src="./src/images/default-setup.gif"/>]()
