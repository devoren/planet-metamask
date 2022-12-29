import React from "react";
import Layout from "antd/es/layout";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEthers } from "@usedapp/core";

const Header = () => {
	const { activateBrowserWallet, account } = useEthers();

	return (
		<>
			<Layout.Header className={styles.root}>
				<Link
					className={styles.logo}
					to="/"
					onClick={() => {
						console.log("[DEBUG] reachGoal: BACK_HOME");
					}}
				>
					<h1 className={styles.logoTitle}>LOGO</h1>
				</Link>
				{account ? (
					<h1 className={styles.accountID}>{account}</h1>
				) : (
					<button onClick={() => activateBrowserWallet()}>
						Connect metamask
					</button>
				)}
			</Layout.Header>
		</>
	);
};

export default Header;
