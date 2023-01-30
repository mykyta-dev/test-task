import styles from "@/components/TableRow/TableRow.module.css";
import { TableRowType } from "@/store/reducers/tableReducer/initialState";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import Image from "next/image";
import doubleCheck from "public/assets/img/check_double.svg";

type Props = {
  tableRow: TableRowType;
};

export const TableRow: React.FC<Props> = ({ tableRow }) => {
  const [name, setName] = useState(tableRow.name);
  const [email, setEmail] = useState(tableRow.email);
  const [company, setCompany] = useState(tableRow.company);
  const [phone, setPhone] = useState(tableRow.phone);
  const [status, setStatus] = useState(tableRow.status);

  const [isOnName, setIsOnName] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const handleChangeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const handleChangeCompany = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCompany(event.target.value);
    },
    []
  );

  const handleChangePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPhone(+event.target.value);
    },
    []
  );

  const handleSelectRow = useCallback(() => {
    dispatch({
      type: "CHANGE_TABLE_FIELD",
      id: tableRow.id,
      field: "isSelected",
      value: !tableRow.isSelected,
    });
  }, [tableRow.isSelected]);

  const onSaveChanges = useCallback((field: keyof TableRowType, value: any) => {
    dispatch({
      type: "CHANGE_TABLE_FIELD",
      id: tableRow.id,
      field,
      value,
    });
  }, []);

  const handleMouseOnName = useCallback(() => {
    if (isOnName) {
      return;
    }

    setIsOnName(true);
  }, [isOnName]);

  const toggleStatus = useCallback(() => {
    console.log("toggle")
    dispatch({
      type: "CHANGE_TABLE_FIELD",
      id: tableRow.id,
      field: "status",
      value: !tableRow.status,
    });
  }, [tableRow])
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableDataCheckbox}>
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
          onClick={handleSelectRow}
          defaultChecked={tableRow.isSelected}
        />
      </td>

      <td
        className={styles.tableDataName}
        onMouseLeave={() => setIsOnName(false)}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://www.nickiswift.com/img/gallery/what-john-cena-was-like-before-the-fame/intro-1504198576.jpg"
          sx={{ width: 40, height: 40 }}
        />

        <input
          value={name}
          onChange={handleChangeName}
          className={styles.tableRowInput}
          onBlur={() => onSaveChanges("name", name)}
          onMouseOver={handleMouseOnName}
        />

        {isOnName && (
          <div className={styles.tableRowReview}>Review</div>
        )}
      </td>

      <td className={styles.tableData}>
        <input
          value={email}
          onChange={handleChangeEmail}
          className={styles.tableRowInput}
          onBlur={() => onSaveChanges("email", email)}
        />
      </td>

      <td className={styles.tableData}>
        <input
          value={company}
          onChange={handleChangeCompany}
          className={styles.tableRowInput}
          onBlur={() => onSaveChanges("company", company)}
        />
      </td>

      <td className={styles.tableData}>
        <input
          value={phone}
          onChange={handleChangePhone}
          className={styles.tableRowInput}
          onBlur={() => onSaveChanges("phone", phone)}
        />
      </td>

      <td className={styles.tableData} onClick={toggleStatus}>
        {tableRow.status && (
          <Image src={doubleCheck} alt="check"/>
        )}
      </td>
    </tr>
  );
};
