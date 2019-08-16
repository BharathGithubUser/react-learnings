import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <div className="row">
          <div className="col-sm-2">Sidebar</div>
          <div className="col-sm-10">MainContent</div>
        </div>
      </div>
    );
  }
}

export default Home;
