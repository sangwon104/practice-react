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

  todoListStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      TextDecoration: "none"
    }
  }

  todoDatas = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    }
  ];

  render() {
    const todoComponent = this.todoDatas.map(todoData => {
      return (
        <div style={this.todoListStyle()} key={todoData.id}>
          <input type="checkbox" defaultChecked={todoData.completed} />
          {" "}{todoData.title}
          <button style={this.btnStyle}>x</button>
        </div>
        );
      }
    );

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title ">
            <h1>할일 목록</h1>            
          </div>
          {todoComponent}
        </div>
      </div>
    );
  }
}