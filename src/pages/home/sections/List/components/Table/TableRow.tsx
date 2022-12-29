import React from "react";
import styles from "./styles.module.scss";
import { User } from "shared/api/model";
import { selectCurrentUser } from "app/store/selectors";
import { useAppSelector } from "app/store/types";

interface TableRowData {
	data?: User;
}

const TableRow = ({ data }: TableRowData) => {
	const user = useAppSelector(selectCurrentUser);
	const className =
		user?.address === data?.address
			? [styles.table__item, styles.table__my_item].join(" ")
			: styles.table__item;

	return (
		<>
			<td className={className}>{data?.username}</td>
			<td className={className}>{data?.email}</td>
			<td className={className}>{data?.address}</td>
		</>
	);
};

export default TableRow;
