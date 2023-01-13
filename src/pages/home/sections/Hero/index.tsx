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
					<div
						className={styles.content__title}
						// style={{
						// 	backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1130' height='322'%3E%3Cstyle%3E .circle%7B transition: transform 3s linear; fill: rgba(231, 86, 38); %7D %3C/style%3E%3Crect x='0' y='0' width='1130' height='322' fill='white'/%3E%3Ccircle class='circle' cx='868' cy='109' r='161' fill='rgba(231, 86, 38)'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='translate' from='0 0' to='${x} ${y}' calcMode='linear' keyTimes='0;1' keySplines='.5 0 .5 1' restart='whenNotActive' begin='0' dur='0.5s' fill='freeze'/%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='translate' from='${x} ${y}' to='${x} ${y}' calcMode='linear' keyTimes='0;1' keySplines='.5 0 .5 1' begin='mouseleave' dur='3s' fill='freeze'/%3E%3C/circle%3E%3C/svg%3E")`,
						// }}
					>
						<h1>
							Explore Your own planet <br /> In{" "}
							<span>our New </span>
							metaverse
						</h1>
					</div>
					<div className={styles.widget__circle}>
						<Planet hasAnimation />
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
			</div>
			<div className={styles.hero__roadmap}>
				<RoadMap />
			</div>
		</div>
	);
};

export default Hero;
