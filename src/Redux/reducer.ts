import { ACTIONS } from "./actions";
import { ActionType, ToDoType } from "./interfaces";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

/**
 * Генерим id для новодобавленной тудушки проходя весь массив,
 * найдя самый большой id и прибавив к нему единицу
 * Делаем мы это для того, чтобы не зависеть от индекса массива
 * и при изменении порядка следования тудушек у нас остались прежние id
 */
function nextTodoId(todos: ToDoType[]) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action: ActionType) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case ACTIONS["todos/todoAdded"]: {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
