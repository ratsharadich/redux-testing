import { combineReducers } from "redux";
import { todosReducer, filtersReducer } from "./features";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
