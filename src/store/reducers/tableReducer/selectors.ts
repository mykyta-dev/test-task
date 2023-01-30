import { RootState } from "@/store";
import { TableRowType } from "./initialState";

export const SelectTableData = (state: RootState, sortCriteria: keyof TableRowType, sortType: "asc" | "desc") => {
  const tableData = state.table.tableData;

  // sorts table data by sortCriteria and sortType
  const sortedTableData = tableData.sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) {
      return sortType === "asc" ? -1 : 1;
    }
    if (a[sortCriteria] > b[sortCriteria]) {
      return sortType === "asc" ? 1 : -1;
    }
    return 0;
  });

  return sortedTableData;
};
