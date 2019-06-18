import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Todo-app">
        <TodoForm
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.changeCurrent}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => state
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
