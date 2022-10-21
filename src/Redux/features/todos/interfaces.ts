import { ACTIONS } from "./constants";

export type ActionType = {
  /** тип (id) action/event */
  type: ACTIONS;

  /** передаваемые в action данные */
  payload: any;
};

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
