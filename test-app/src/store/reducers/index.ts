import { combineReducers } from "redux";
import { TableReducer } from "./tableReducer";
import { initialState } from "./tableReducer/initialState";

const RootReducer = combineReducers({
  table: TableReducer,
});

export type RootReducerType = typeof RootReducer;

export const RootInitialState = {
  table: initialState,
}

export default RootReducer;
