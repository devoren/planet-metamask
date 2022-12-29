import { useEthers } from "@usedapp/core";
import Spin from "antd/es/spin";
import { selectCurrentUser } from "app/store/selectors";
import { useAppDispatch, useAppSelector } from "app/store/types";
import { getAccess } from "entities/viewer/model";
import { useEffect, useState } from "react";
import { listApi, useLazyGetListQuery } from "shared/api";
import { PageData, User } from "shared/api/typicode/models";
import Table from "./components/Table";
import styles from "./styles.module.scss";

const PER_PAGE = 20;

const List = () => {
	const dispatch = useAppDispatch();
	const { account, active } = useEthers();
	const user = useAppSelector(selectCurrentUser);
	const [page, setPage] = useState<number>(0);
	const [trigger, { data, isFetching, isLoading }] = useLazyGetListQuery();
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	useEffect(() => {
		dispatch(listApi.util.invalidateTags(["PageData"]));
	}, []);

	useEffect(() => {
		if (user) {
			trigger({ page, perPage: PER_PAGE }, true).unwrap();
		}
	}, [user, page]);

	const totalPages = data?.meta.totalPages!;
	const hasNextPage = totalPages ? page <= totalPages : false;

	const onEndReached = () => {
		if (!isFetching && data && page * PER_PAGE <= totalPages * PER_PAGE) {
			setPage((currentPage) => currentPage + 1);
		}
	};

	const onScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
		const { scrollTop, offsetHeight, scrollHeight } = event.target as any;

		if (page === 0) {
			if (scrollTop + offsetHeight > scrollHeight * 0.8) {
				onEndReached();
			}
		} else if (page > 0) {
			if (scrollTop + offsetHeight > scrollHeight - 1.2 * PER_PAGE * 51) {
				onEndReached();
			}
		}
	};

	const isFormEnabled = active && username !== "" && email !== "";
	const isUserInList = user
		? data?.items.some((item) => item.address === user.address)
		: false;
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isFormEnabled && account) {
			const user = {
				id: 0,
				username,
				email,
				address: account,
			} satisfies User;
			dispatch(getAccess({ user }));
			trigger({ page, perPage: PER_PAGE }, true).unwrap();
		}
	};

	const addToList = () => {
		if (user) {
			dispatch(
				listApi.util.updateQueryData(
					"getList",
					undefined,
					(data: PageData) => {
						data.items.unshift(user);
					}
				)
			);
		}
	};

	return (
		<div className={styles.list}>
			<div className={styles.beta}>
				<div className={styles.beta__title}>
					<h1>Beta test registration</h1>
				</div>
				<div className={styles.beta__description}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>
				{user ? (
					<div className={"fields"}>
						<div className={"field"}>
							<p className={"label"}>Name</p>
							<p className={"field_data"}>{user?.username}</p>
						</div>
						<div className={"field"}>
							<p className={"label"}>Email</p>
							<p className={"field_data"}>{user?.email}</p>
						</div>
						<button disabled={isUserInList} onClick={addToList}>
							List me to the table
						</button>
					</div>
				) : (
					<form className={styles.beta__form} onSubmit={onSubmit}>
						<label className={styles.input} htmlFor="name">
							<p className={styles.input__label}>Name</p>
							<input
								type="text"
								name="name"
								id="name"
								autoComplete="off"
								placeholder="We will display your name in participation list"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</label>
						<label className={styles.input} htmlFor="email">
							<p className={styles.input__label}>Email</p>
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="off"
								placeholder="We will display your name in participation list"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<button
							disabled={!isFormEnabled}
							title={
								!active
									? "Connect to MetaMask first"
									: "Get early access"
							}
						>
							Get early access
						</button>
					</form>
				)}
			</div>
			{user ? (
				isLoading ? (
					<div className={styles.participation__parent_loader}>
						<Spin delay={500} size="large" />
					</div>
				) : (
					<div className={styles.participation}>
						<h1 className={styles.participation__title}>
							Participation listing
						</h1>
						{page === 0 && isFetching ? (
							<div className={styles.participation__loader}>
								<Spin delay={500} size="large" />
							</div>
						) : (
							<>
								<Table
									data={data?.items}
									onScroll={onScroll}
									isFetching={isFetching}
									hasNextPage={hasNextPage}
									page={page}
								/>
							</>
						)}
					</div>
				)
			) : null}
		</div>
	);
};

export default List;
