import React from "react";
import styles from "./styles.module.scss";

const tableHeaders = [
	{
		id: 1,
		title: "Name",
	},
	{
		id: 2,
		title: "Email",
	},
	{
		id: 3,
		title: "Wallet",
	},
];

const TableHead = () => {
	return (
		<thead>
			<tr>
				{tableHeaders.map((header) => {
					return (
						<th
							key={header.id}
							className={styles.tableHead__header}
							colSpan={1}
						>
							{header.title}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export default TableHead;
