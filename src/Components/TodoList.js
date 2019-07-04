import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, toggleTodo } from "../reducers/todo";

const TodoItem = ({ id, toggleTodo, isComplete, name }) => (
  <li>
    <input
      type="checkbox"
      onChange={() => toggleTodo(id)}
      checked={isComplete}
    />{" "}
    {name}
  </li>
);

class todoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ todos: state.todo.todos }),
  { fetchTodos, toggleTodo }
)(todoList);
