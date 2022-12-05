import { createSlice } from '@reduxjs/toolkit'
import {
  AddTodoActionType,
  ToDoType,
  ToggleTodoActionType,
  RemoveTodoActionType,
} from './interfaces'

/**
 * Генерим id для новодобавленной тудушки проходя весь массив,
 * найдя самый большой id и прибавив к нему единицу
 * Делаем мы это для того, чтобы не зависеть от индекса массива
 * и при изменении порядка следования тудушек у нас остались прежние id
 */
function nextTodoId(todos: ToDoType[]) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'rgb(52%, 11%, 79%, .2)' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'rgb(11%, 56%, 79%, .2)' },
    ],
  },
  reducers: {
    addTodo(state, { payload }: AddTodoActionType) {
      if (!state.todos.find((todo) => todo.text === payload.text)) {
        state.todos.push({
          id: nextTodoId(state.todos),
          text: payload.text,
          completed: false,
        })
        return
      }
      alert('Такой todo уже существует')
    },
    toggleTodo(state, { payload }: ToggleTodoActionType) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
      )
    },
    removeTodo(state, { payload }: RemoveTodoActionType) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export const { reducer } = todoSlice

// export function todosReducer(state = initialState, action: ActionType) {
//   switch (action.type) {
//     case ACTIONS["todos/todoAdded"]: {
//       // Can return just the new todos array - no extra object around it
//       return [
//         ...state,
//         {
//           id: nextTodoId(state),
//           text: action.payload,
//           completed: false,
//         },
//       ];
//     }
//     case ACTIONS["todos/todoToggled"]: {
//       return state.map((todo) => {
//         if (todo.id !== action.payload) {
//           return todo;
//         }

//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       });
//     }
//     default:
//       return state;
//   }
// }
