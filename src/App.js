import React, { Component } from "react";
import { connect } from "react-redux";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { updateCurrent } from "./reducers/todo";
import { bindActionCreators } from "redux";

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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCurrent }, dispatch);
const mapStateToProps = state => state;
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
