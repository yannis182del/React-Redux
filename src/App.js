import React, { Component } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Message from "./Components/Message";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Todo-app">
        <Message message="Hello World!" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
