import React, {Component } from "react";
import "./App.css";

export default class App extends Component {

  state = {
    todos : [],
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

  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
  }

  inputTitle = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  saveTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo], value: ""});
  }

  changeCompleted(id) {
    const changedTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todo: changedTodos});
  }

  render() {
    const todoComponent = this.state.todos.map(todo => {
      return (
        <div style={this.listStyle(todo.completed)} key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} onClick={() => this.changeCompleted(todo.id)} />
          {" "}{todo.title}
          <button style={this.btnStyle} onClick={() => this.removeTodo(todo.id)}>x</button>
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
          <form style={{display: "flex"}} onSubmit={this.saveTodo}>
              <input 
                style={{flex: "10", padding: "5px"}} 
                type="text" 
                name="value" 
                placeholder="해야할 일을 입력하세요."
                value={this.state.value}
                onChange={this.inputTitle}
              />
              <input 
                type="submit" 
                value="입력" 
                className="btn" 
                style={{flex: "1"}}
              />
            </form>
        </div>
      </div>
    );
  }
}