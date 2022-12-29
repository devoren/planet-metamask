import React from "react";
import styles from "./styles.module.scss";
import Planet from "widgets/planet";

const data = [
	{
		id: 1,
		stat: "12, 345",
		title: "Lorem ipsum dolor",
	},
	{
		id: 2,
		stat: "12, 345",
		title: "Lorem ipsum dolor",
	},
	{
		id: 3,
		stat: "12, 345",
		title: "Lorem ipsum dolor",
	},
];

const RoadMap = () => {
	return (
		<>
			<h1 className={styles.title}>Roadmap stats</h1>
			{data.map((d) => {
				return (
					<div key={d.id} className={styles.data}>
						<div className={styles.data_stat}>{d.stat}</div>
						<p className={styles.data_title}>{d.title}</p>
					</div>
				);
			})}
		</>
	);
};

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__content}>
				<div className={styles.content}>
					<div className={styles.content__title}>
						<h1>
							Explore Your own planet <br /> In{" "}
							<span>our New </span>
							metaverse
						</h1>
					</div>
					<div className={styles.content__description}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>
				</div>
				<div className={styles.content__widget}>
					<Planet hasAnimation />
				</div>
			</div>
			<div className={styles.hero__roadmap}>
				<RoadMap />
			</div>
		</div>
	);
};

export default Hero;
