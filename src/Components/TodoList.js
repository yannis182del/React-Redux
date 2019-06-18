import React from "react";
import { connect } from "react-redux";

const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

const todoList = props =>(
  <div className="todo-list">
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

export default connect((state) => ({ todos: state.todos }))(todoList);
