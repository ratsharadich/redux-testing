import { ACTIONS } from "src/Redux";
import { ChangeType } from "./constants";

export type ActionType = {
  type: ACTIONS;
  payload: { color: string; changeType: ChangeType };
};
