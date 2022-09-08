import { ACTIONS } from "./actions";
import { ActionType } from "./interfaces";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
  filters: {
    status: "All",
    colors: [],
  },
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action: ActionType) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case ACTIONS["filters/statusFilterChanged"]: {
      return {
        // Copy the whole state
        ...state,
        // Overwrite the filters value
        filters: {
          // copy the other filter fields
          ...state.filters,
          // And replace the status field with the new value
          status: action.payload,
        },
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
