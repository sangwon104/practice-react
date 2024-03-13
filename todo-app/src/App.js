import React, {Component } from "react";
import "./App.css";

export default class App extends Component {

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      TextDecoration: "none"
    }
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title ">
            <h1>할일 목록</h1>            
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            세수하기
            <button style={this.btnStyle}>x</button>
          </div>
        </div>
      </div>
    );
  }
}