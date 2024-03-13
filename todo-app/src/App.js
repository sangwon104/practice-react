import React, {Component } from "react";
import "./App.css";

export default class App extends Component {

  state = {
    todos : [
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
    ],
    value : ""
  }
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

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
  }

  render() {
    const todoComponent = this.state.todos.map(todo => {
      return (
        <div style={this.todoListStyle()} key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          {" "}{todo.title}
          <button style={this.btnStyle} onClick={() => this.deleteTodo(todo.id)}>x</button>
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