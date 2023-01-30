import styles from "@/components/TableRow/TableRow.module.css";
import { TableRowType } from "@/store/reducers/tableReducer/initialState";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import Image from "next/image";
import doubleCheck from "public/assets/img/check_double.svg";
import { changeTableField } from "@/store/reducers/tableReducer/actions";

type Props = {
  tableRow: TableRowType;
};

export const TableRow: React.FC<Props> = ({ tableRow }) => {
  const { name, email, company, phone } = tableRow;

  const [isOnName, setIsOnName] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleSelectRow = useCallback(() => {
    dispatch(changeTableField("isSelected", !tableRow.isSelected, tableRow.id));
  }, [tableRow.isSelected, tableRow.id]);

  const changeField = useCallback(
    (field: keyof TableRowType, value: any) => {
      dispatch(changeTableField(field, value, tableRow.id));
    },
    [tableRow.id]
  );

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("name", event.target.value);
    },
    [changeField]
  );

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("email", event.target.value);
    },
    [changeField]
  );

  const handleChangeCompany = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("company", event.target.value);
    },
    [changeField]
  );

  const handleChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeField("phone", event.target.value);
    },
    [changeField]
  );

  const handleMouseOnName = useCallback(() => {
    if (isOnName) {
      return;
    }

    setIsOnName(true);
  }, [isOnName]);

  const toggleStatus = useCallback(() => {
    changeField("status", !tableRow.status);
  }, [tableRow.status]);

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableDataCheckbox}>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
          onClick={handleSelectRow}
          defaultChecked={tableRow.isSelected}
        />
      </td>
      <td className={styles.tableDataName} onMouseLeave={() => setIsOnName(false)}>
        <Avatar
          alt="Remy Sharp"
          src="https://www.nickiswift.com/img/gallery/what-john-cena-was-like-before-the-fame/intro-1504198576.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <input
          value={name}
          onChange={handleChangeName}
          className={styles.tableRowInput}
          onMouseOver={handleMouseOnName}
        />
        {isOnName && <div className={styles.tableRowPreview}>Preview</div>}
      </td>
      <td className={styles.tableData}>
        <input value={email} onChange={handleChangeEmail} className={styles.tableRowInput} />
      </td>
      <td className={styles.tableData}>
        <input value={company} onChange={handleChangeCompany} className={styles.tableRowInput} />
      </td>
      <td className={styles.tableData}>
        <input value={phone} onChange={handleChangePhone} className={styles.tableRowInput} />
      </td>
      <td className={styles.tableData} onClick={toggleStatus}>
        {tableRow.status && <Image src={doubleCheck} alt="check" />}
      </td>
    </tr>
  );
};
