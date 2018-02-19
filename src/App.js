import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import autobind from "autobind-decorator";
import logo from "./logo.svg";
import "./App.css";

@observer
class App extends Component {
  @observable count = 0;

  @autobind
  increase() {
    this.count += 1;
  }
  @autobind
  decrease() {
    this.count -= 1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href="#" onClick={this.increase}>
            Increase
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" onClick={this.decrease}>
            Decrease
          </a>
        </p>
        <p>Count: {this.count}</p>
      </div>
    );
  }
}

export default App;
