import { combineReducers } from "redux";
import { todosReducer, filtersReducer } from "./features";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
