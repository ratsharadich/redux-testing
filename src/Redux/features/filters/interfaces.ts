import { ACTIONS, ChangeType } from "./constants";

export type ActionType = {
  type: ACTIONS;
  payload: { color: string; changeType: ChangeType };
};
