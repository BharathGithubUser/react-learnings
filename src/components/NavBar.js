import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link }
  from 'react-router-dom';
import Home from "./Home"
import About from "./About"
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleSearchFieldState = this.handleSearchFieldState.bind(this);
        this.handleSearchAction = this.handleSearchAction.bind(this);
    }
    handleSearchFieldState(event) {
        this.setState({ value: event.target.value })
    }
    handleSearchAction() {
        console.log("Searched for " + this.state.value);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Tasks</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/"} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to={"/some"} className="dropdown-item">Action</Link>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                        <input className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={this.state.value} onChange={this.handleSearchFieldState} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearchAction} >Search</button>
                    </div>
                </div>
            </nav>
        )
    }
}
export default NavBar