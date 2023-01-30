import { TableActions } from "./actions";
import { CHANGE_TABLE_FIELD } from "./actionType";
import { initialState } from "./initialState";

export const TableReducer = (state = initialState, action: TableActions) => {
  switch (action.type) {
    case CHANGE_TABLE_FIELD:
      const newState = {
        ...state,
        tableData: state.tableData.map((row) => {
          if (row.id === action.id) {
            return {
              ...row,
              [action.field]: action.value,
            };
          }

          return row;
        }),
      };
      return newState;
    default:
      return state;
  }
};

export type TableReducerType = typeof TableReducer;
