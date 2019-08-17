import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link }
  from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar";
class Main extends Component {
  render() {
    return (
      <div>
          <Router>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Router >
      </div>
        )
      }
    }
export default Main