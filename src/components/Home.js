import React, { Component } from 'react';
import NavBar from "./NavBar"
import Slider from './carousel/slider';

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <div className="row">
          <div className="col-sm-2">Sidebar</div>
          <div className="col-sm-10">
            <div className = "container-fluid">
              <div className = "row">
                <Slider/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
