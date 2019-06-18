import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { updateCurrent } from "./reducers/todo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Todo-app">
        <TodoForm
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.updateCurrent}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default connect(
  state => state,
  { updateCurrent }
)(App);
