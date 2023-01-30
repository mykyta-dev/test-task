import React from "react";
import styles from "./TableHeader.module.css";
import Image from "next/image";
import SortIcon from "public/assets/img/sort.svg";

interface IProps {
  title: string;
  onClick?: () => void;
  showSortIcon?: boolean;
  sortType?: "asc" | "desc";
}

const TableHeader: React.FC<IProps> = ({ title, onClick, showSortIcon, sortType }) => (
  <th className={styles.tableHeader} onClick={onClick}>
    {title}
    {showSortIcon && (
      <Image src={SortIcon} alt={"Sorting order"} className={sortType === "desc" ? styles.sortFlipped : ""} />
    )}
  </th>
);

export default React.memo(TableHeader);
