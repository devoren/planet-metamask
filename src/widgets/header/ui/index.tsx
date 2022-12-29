import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEthers } from "@usedapp/core";

const Header = () => {
	const { activateBrowserWallet, account } = useEthers();

	return (
		<>
			<header className={styles.root}>
				<Link className={styles.logo} to="/">
					<h1 className={styles.logoTitle}>LOGO</h1>
				</Link>
				{account ? (
					<h1 className={styles.accountID}>{account}</h1>
				) : (
					<button onClick={() => activateBrowserWallet()}>
						Connect metamask
					</button>
				)}
			</header>
		</>
	);
};

export default Header;
