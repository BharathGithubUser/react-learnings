import React, { Component } from "react"
import '../App.css';
class SideBar extends Component {
    render() {
        return (
            <div className="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
}
export default SideBar