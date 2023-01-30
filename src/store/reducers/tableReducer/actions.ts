import { CHANGE_TABLE_FIELD } from "./actionType";
import { TableRowType } from "./initialState";

export const changeTableField = <T extends keyof TableRowType>(field: T, value: TableRowType[T], id: number) => (
  {
    type: CHANGE_TABLE_FIELD,
    id,
    field,
    value,
  }
)

export type TableActions = ReturnType<typeof changeTableField>; // | Return...
