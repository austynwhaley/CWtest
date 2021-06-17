import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/index.css"
import { render } from "react-dom";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainClass from "./components/mainClass";
import Search from "./components/SearchBar/searchBar";
import MainFunctional from "./components/mainFunctional";
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <MainFunctional />
        

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
