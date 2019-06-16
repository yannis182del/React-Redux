import reducer from "./todo.js";

describe("Todo reducer", () => {
  test("Expect todo to be a state Object", () => {
    const result = reducer(undefined, { type: "ANYTHING" });
    expect(result).toBeDefined();
  });
  test("Adds a todo", () => {
    const startState = {
      todos: [
        { id: 1, name: "Create Static UI", isComplete: true },
        { id: 2, name: "Create Initial State", isComplete: false },
        { id: 3, name: "Use state to render UI", isComplete: false }
      ]
    };
    const expectedState = {
      todos: [
        { id: 1, name: "Create Static UI", isComplete: true },
        { id: 2, name: "Create Initial State", isComplete: false },
        { id: 3, name: "Use state to render UI", isComplete: false },
        { id: 4, name: "Add a todo", isComplete: false }
      ]
    };
    const action = {
      type: "TODO_ADD",
      payload: { id: 4, name: "Add a todo", isComplete: false }
    };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
