import { ACTIONS, ChangeType } from "./constants";

export enum StatusFilters {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
};

export type ActionType = {
  type: ACTIONS;
  payload: { color?: string; changeType?: ChangeType, status?: StatusFilters };
};
