import React from "react";
import styles from "./styles.module.scss";

interface AlertProps {
	onClick: () => void;
}

const Alert = ({ onClick }: AlertProps) => {
	return (
		<div className={styles.alert}>
			<div className={styles.alert__box}>
				<div className={styles.title_wrap}>
					<h1>metamask extention</h1>
				</div>
				<div className={styles.body}>
					<p>
						To work with our application, you have to install the
						&nbsp;
						<a
							href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related"
							target={"_blank"}
							referrerPolicy="no-referrer"
						>
							Metamask browser extension
						</a>
					</p>
					<button onClick={onClick}>Skip this step</button>
				</div>
			</div>
			<div className={styles.alert__backdrop} />
		</div>
	);
};

export default Alert;
