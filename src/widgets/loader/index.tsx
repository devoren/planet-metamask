import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./styles.module.scss";

interface LoaderProps {
	color?: string;
	duration?: string;
	width?: string;
	strokeWidth?: string;
	overlay?: boolean;
}

const Loader = ({
	color,
	duration,
	width,
	strokeWidth,
	overlay,
}: LoaderProps) => {
	return (
		<>
			{overlay ? (
				<div className={styles.overlay}>
					<RotatingLines
						strokeColor={color ?? "var(--main-color)"}
						strokeWidth={strokeWidth ?? "5"}
						animationDuration={duration ?? "0.75"}
						width={width ?? "48"}
						visible={true}
					/>
				</div>
			) : (
				<RotatingLines
					strokeColor={color ?? "var(--main-color)"}
					strokeWidth={strokeWidth ?? "5"}
					animationDuration={duration ?? "0.75"}
					width={width ?? "48"}
					visible={true}
				/>
			)}
		</>
	);
};

export default Loader;
