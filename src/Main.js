import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Peeps from "./Peeps";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Chitter</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/peeps">Peeps</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/peeps" component={Peeps}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

