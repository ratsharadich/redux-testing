import { PayloadAction } from '@reduxjs/toolkit';

export interface ToDoType {
  /** id тудушки */
  id: number;

  /** Текст тудушки */
  title: string;

  /** Выполнена ли тудушка */
  completed: boolean;

  /** Цвет подложки тудушки */
  color?: string;
}

export type AddTodoActionType = PayloadAction<{ title: string }>;
export type ToggleTodoActionType = PayloadAction<{ id: number }>;
export type RemoveTodoActionType = ToggleTodoActionType;

export interface TodoStateType {
  /** Список тудушек */
  todos: ToDoType[];

  /** Статус изначального запроса тудушек */
  status: null | string;

  /** Возможнная ошибка при изначальном запросе тудушек */
  error: null | string;
}
