import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../reducers/todo";

const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
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
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ todos: state.todo.todos }),
  { fetchTodos }
)(todoList);
