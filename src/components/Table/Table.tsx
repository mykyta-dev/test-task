import { SelectTableData } from "@/store/reducers/tableReducer/selectors";
import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import styles from "@/components/Table/Table.module.css";
import { TableRow } from "../TableRow/TableRow";
import { useCallback, useMemo, useState } from "react";
import { TableRowType } from "@/store/reducers/tableReducer/initialState";

export const Table = () => {
  const [sortCriteria, setSortCriteria] = useState<keyof TableRowType>("id");
  const tableRows = useSelector(SelectTableData);

  // const handleChangingSortCriteria = useCallback((criteria: string) => {
  //   setSortCriteria(criteria);
  // }, []);

  // const filtredData = useMemo(() => (
  //   sortCriteria ? [...tableRows].sort(row => row[${}]) : tableRows
  // ), [sortCriteria]

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeading}>
        <tr className={styles.tableHeading}>
          <th className={styles.tableHeaderCheckbox}>
            <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }} />
          </th>

          <th
            className={styles.tableHeader}
            onClick={() => setSortCriteria("name")}
          >
            Name
          </th>

          <th className={styles.tableHeader}>Email</th>

          <th className={styles.tableHeader}>Company</th>

          <th className={styles.tableHeader}>Phone Number</th>

          <th className={styles.tableHeader}>Status</th>
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
