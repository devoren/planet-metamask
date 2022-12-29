import React from "react";
import styles from "./styles.module.scss";
import { PageData, User } from "shared/api/model";
import { selectCurrentUser } from "app/store/selectors";
import { useAppDispatch, useAppSelector } from "app/store/types";
import { listApi } from "shared/api";

interface TableRowData {
	data?: User;
}

const TableRow = ({ data }: TableRowData) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectCurrentUser);
	const className =
		user?.address === data?.address
			? [styles.table__item, styles.table__my_item].join(" ")
			: styles.table__item;

	const removeFromList = () => {
		dispatch(
			listApi.util.updateQueryData(
				"getList",
				undefined,
				(data: PageData) => {
					data.items.splice(0, 1);
				}
			)
		);
	};

	return (
		<>
			<td className={className}>{data?.username}</td>
			<td className={className}>{data?.email}</td>
			<td className={className}>
				{data?.address}
				{user?.address === data?.address ? (
					<span onClick={removeFromList}>&#x2716;</span>
				) : null}
			</td>
		</>
	);
};

export default TableRow;
