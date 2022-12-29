import { useVirtualizer } from "@tanstack/react-virtual";
import { selectCurrentUser } from "app/store/selectors";
import { useAppSelector } from "app/store/types";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "shared/api/model";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import styles from "./styles.module.scss";

interface TableData {
	data?: User[];
	onScroll: React.UIEventHandler<HTMLDivElement>;
	isFetching?: boolean;
	hasNextPage: boolean;
	page: number;
}

const Table = ({ data, onScroll, hasNextPage, page }: TableData) => {
	const navigate = useNavigate();
	const user = useAppSelector(selectCurrentUser);

	const parentRef = React.useRef<HTMLTableElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: hasNextPage
			? page === 0
				? data?.length!
				: data?.length! + 20
			: data?.length!,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 51,
		overscan: 5,
	});

	return (
		<>
			<div className={styles.participation__head}>
				<table className={styles.tableHead}>
					<TableHead />
				</table>
			</div>
			<div
				className={styles.participation__container}
				ref={parentRef}
				onScroll={onScroll}
			>
				<table className={styles.table} cellSpacing={0}>
					<tbody
						className={styles.table__body}
						style={{
							height: `${rowVirtualizer.getTotalSize()}px`,
						}}
					>
						{data &&
							rowVirtualizer
								.getVirtualItems()
								.map((virtualRow) => {
									const isLoaderRow =
										virtualRow.index > data.length - 1;
									const userData = data[virtualRow.index];

									return (
										<tr
											key={virtualRow.index}
											style={{
												height: `${virtualRow.size}px`,
												transform: `translateY(${virtualRow.start}px)`,
												cursor:
													user?.address ===
													userData?.address
														? "default"
														: "pointer",
											}}
											onClick={(e) => {
												e.stopPropagation();
												user?.address !==
													userData?.address &&
													navigate(
														`/about/${userData.id}`
													);
											}}
										>
											<TableRow data={userData} />
										</tr>
									);
								})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Table;
