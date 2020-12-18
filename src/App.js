import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className="container">
          <div className="wrapper">
            <div className="home"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/opportunities" component={Opportunities} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
        {/* </div>
          </div>
        </div> */}
      </div>
    </Router>
  );
}

function Opportunities() {
  // you can import the content component of this page "Opportunities"
  return (
    <div className="home-content">
      <div className="home-content-top">
        <p>Discover our numerous opportunities</p>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <div className="home-content">
      <div className="home-content-top">
        <p>Solutions that help you.</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="home-content">
      <div className="home-content-top">
        <p>Feel free to reach us.</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-content">
      <div className="home-content-top">
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
