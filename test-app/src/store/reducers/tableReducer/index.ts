import { TableActions } from "./actions";
import { CHANGE_TABLE_FIELD } from "./actionType";
import { initialState } from "./initialState";

export const TableReducer = (state = initialState, action: TableActions) => {
  switch (action.type) {
    case CHANGE_TABLE_FIELD:
      const newState = state.tableData.map(tableRow => {
        if (tableRow.id === action.id) {
          tableRow[action.field] = action.value;
        }
      })

      return state;

      default:
        return state;
  }
};

export type TableReducerType = typeof TableReducer;
