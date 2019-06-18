// The initial state of my App
import { getTodos } from "../lib/todoServices";

const initialState = {
  todos: [],
  currentTodo: ""
};

const TODO_ADD = "TODO_ADD";
const TODO_LOAD = " TODO_LOAD";
const CURRENT_UPDATE = "CURRENT_UPDATE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });

export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos})

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
    .then(todos => dispatch(loadTodos(todos)));
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
      case TODO_LOAD:
          return { ...state, todos: action.payload };
    default:
      return state;
  }
};
