import { ACTIONS, ChangeType } from "./constants";
import { ActionType, StatusFilters } from "./interfaces";

const initialState = {
  status: StatusFilters.ALL,
  colors: [] as string[],
};

export function filtersReducer(
  state = initialState,
  action: ActionType
): typeof initialState {
  switch (action.type) {
    case ACTIONS.STATUS: {
      const { status } = action.payload;

      if (status) {
        return {
          // Again, one less level of nesting to copy
          ...state,
          status,
        };
      }

      return initialState;
    }
    case ACTIONS.COLOR: {
      let { color, changeType } = action.payload;
      const { colors } = state;

      switch (changeType) {
        case ChangeType.ADDED: {
          if (color) {
            if (colors.includes(color)) {
              // This color already is set as a filter. Don't change the state.
              return state;
            }

            return {
              ...state,
              colors: state.colors.concat(color),
            };
          }

          return initialState;
        }
        case ChangeType.REMOVED: {
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
