import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf.js';
import CreatePost from './CreatePost.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurf />
      <CreatePost/>

      </div>
    );
  }
}

export default App;
