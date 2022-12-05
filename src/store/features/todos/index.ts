import { createSlice } from '@reduxjs/toolkit';
import {
  AddTodoActionType,
  ToDoType,
  TodoStateType,
  ToggleTodoActionType,
  RemoveTodoActionType,
} from './interfaces';
import { extraReducers } from './thunks';

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

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  } as TodoStateType,
  reducers: {
    addTodo(state, { payload }: AddTodoActionType) {
      if (!state.todos.find((todo) => todo.title === payload.title)) {
        state.todos.unshift({
          id: nextTodoId(state.todos),
          title: payload.title,
          completed: false,
        });
        return;
      }
      alert('Такой todo уже существует');
    },
    toggleTodo(state, { payload }: ToggleTodoActionType) {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
      );
    },
    removeTodo(state, { payload }: RemoveTodoActionType) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
  },
  extraReducers,
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export const { reducer } = todoSlice;
