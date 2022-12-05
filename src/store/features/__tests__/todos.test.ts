import { last, first } from 'lodash';

import { ACTIONS } from "../todos/constants";
import { todosReducer } from "../todos/index";


const initialState = [
  { id: 0, text: "Learn React", completed: false },
  { id: 1, text: "Learn Redux", completed: true, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

describe("Reducer of todos", () => {
  it("Add todo", () => {
    const text = "added sucsesfully";
    const action = { type: ACTIONS["todos/todoAdded"], payload: text };
    const result = todosReducer(initialState, action);

    expect(last(result)?.text).toBe(text);
    expect(last(result)?.completed).toBe(false);
  });

  it("Toggle todo", () => {
    const action = { type: ACTIONS["todos/todoToggled"], payload: 0 };
    const result = todosReducer(initialState, action);

    expect(first(result)?.completed).toBe(true);
  });
});
