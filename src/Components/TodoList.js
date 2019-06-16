import React from "react";

const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} /> {name}
  </li>
);

export default props => (
  <div className="todo-list">
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);
