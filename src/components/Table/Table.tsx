import { SelectTableData } from "@/store/reducers/tableReducer/selectors";
import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import styles from "@/components/Table/Table.module.css";
import { TableRow } from "../TableRow/TableRow";
import { useCallback, useState } from "react";
import { TableRowType } from "@/store/reducers/tableReducer/initialState";
import TableHeader from "../TableHeader";
import { RootState } from "@/store";

export const Table = () => {
  const [sortCriteria, setSortCriteria] = useState<keyof TableRowType>("id");
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");
  const tableRows = useSelector<RootState, TableRowType[]>((state) => SelectTableData(state, sortCriteria, sortType));

  const sortBy = useCallback(
    (criteria: keyof TableRowType) => {
      setSortCriteria(criteria);
      setSortType(sortType === "asc" ? "desc" : "asc");
    },
    [sortType]
  );

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <tr className={styles.tableHeading}>
          <th className={styles.tableHeaderCheckbox}>
            <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />
          </th>
          <TableHeader
            title="Name"
            onClick={() => sortBy("name")}
            showSortIcon={sortCriteria === "name"}
            sortType={sortType}
          />
          <TableHeader
            title="Email"
            onClick={() => sortBy("email")}
            showSortIcon={sortCriteria === "email"}
            sortType={sortType}
          />
          <TableHeader
            title="Company"
            onClick={() => sortBy("company")}
            showSortIcon={sortCriteria === "company"}
            sortType={sortType}
          />
          <TableHeader
            title="Phone Number"
            onClick={() => sortBy("phone")}
            showSortIcon={sortCriteria === "phone"}
            sortType={sortType}
          />
          <TableHeader title="Status" />
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {tableRows.map((tableRow) => (
          <TableRow key={tableRow.id} tableRow={tableRow} />
        ))}
      </tbody>
    </table>
  );
};
