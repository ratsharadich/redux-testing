export type AddTodoActionType = { payload: { text: string }};
export type ToggleTodoActionType = { payload: { id: number }};
export type RemoveTodoActionType = ToggleTodoActionType;

export type ToDoType = {
  /** id тудушки */
  id: number;

  /** Текст тудушки */
  text: string;

  /** Выполнена ли тудушка */
  completed: boolean;

  /** Цвет подложки тудушки */
  color?: string;
};
