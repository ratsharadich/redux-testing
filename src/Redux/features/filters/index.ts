import { ACTIONS, ChangeType } from "./constants";
import { ActionType } from "./interfaces";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: StatusFilters.All,
  colors: [] as string[],
};

export function filtersReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ACTIONS["filters/statusFilterChanged"]: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case ACTIONS["filters/colorFilterChanged"]: {
      let { color, changeType } = action.payload;
      const { colors } = state;

      switch (changeType) {
        case ChangeType.added: {
          if (colors.includes(color)) {
            // This color already is set as a filter. Don't change the state.
            return state;
          }

          return {
            ...state,
            colors: state.colors.concat(color),
          };
        }
        case ChangeType.remove: {
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
}
