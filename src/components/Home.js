import React, { Component } from 'react';
import NavBar from "./NavBar"
import SideBar from './SideBar'
import Slider from './carousel/slider';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2"><SideBar /></div>
            <div className="col-sm-10">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
