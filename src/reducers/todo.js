// The initial state of my App
import { getTodos, createTodo, updateTodo } from "../lib/todoServices";
import { showMessage } from "./message";

const initialState = {
  todos: [],
  currentTodo: ""
};

export const TODO_ADD = "TODO_ADD";
export const TODO_LOAD = " TODO_LOAD";
const CURRENT_UPDATE = "CURRENT_UPDATE";
export const TODO_REPLACE = "TODO_REPLACE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodos = todos => ({ type: TODO_LOAD, payload: todos });
export const addTodo = todo => ({ type: TODO_ADD, payload: todo });
export const replaceTodo = todo => ({ type: TODO_REPLACE, payload: todo });

export const fetchTodos = () => {
  return dispatch => {
    dispatch(showMessage("Loading todos"));
    getTodos().then(todos => dispatch(loadTodos(todos)));
  };
};

export const saveTodo = name => {
  return dispatch => {
    dispatch(showMessage("Saving Todo"));
    createTodo(name).then(res => dispatch(addTodo(res)));
  };
};

export const toggleTodo = id => {
  return (dispatch, getState) => {
    dispatch(showMessage("Saving Todo Updated"));
    const { todos } = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggled = { ...todo, isComplete: !todo.isComplete };
    updateTodo(toggled).then(res => dispatch(replaceTodo(res)));
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        currentTodo: "",
        todos: state.todos.concat(action.payload)
      };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_LOAD:
      return { ...state, todos: action.payload };
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload.id ? action.payload : t
        )
      };
    default:
      return state;
  }
};
