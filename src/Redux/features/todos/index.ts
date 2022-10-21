import { ACTIONS } from "./constants";
import { ActionType, ToDoType } from "./interfaces";

const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

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

export function todosReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ACTIONS["todos/todoAdded"]: {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case ACTIONS["todos/todoToggled"]: {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    default:
      return state;
  }
}
