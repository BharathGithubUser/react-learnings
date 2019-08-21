import React, { Component } from 'react';
import NavBar from "./NavBar"

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.</p>ß
        <p>To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd></p>
        <code>&lt;section&gt;
          #include iostream.h
          #include conio.h
        </code>
      </div>
    );
  }
}

export default About;