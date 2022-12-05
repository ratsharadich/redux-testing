import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodosPartly } from "src/shared";
import { STATUSES, THUNK_NAMES, TODOS_PART } from "./constants";
import { TodoStateType, ToDoType } from "./interfaces";

/** Запрашиваем изначальные тудушки */
export const fetchTodos = createAsyncThunk<
  ToDoType[],
  void,
  {
    rejectValue: string;
  }
>(THUNK_NAMES.FETCH_TODO, async (_, { rejectWithValue }) => {
  try {
    const { data } = await fetchTodosPartly(TODOS_PART);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      console.error(`Unexpected error in ${THUNK_NAMES.FETCH_TODO}`);
    }
  }
});

export const extraReducers = (builder: ActionReducerMapBuilder<TodoStateType>) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.status = STATUSES.RESOLVED;
      state.todos = payload;
      state.error = null;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = STATUSES.REJECTED;
      state.error = action.payload || null;
    });
  }