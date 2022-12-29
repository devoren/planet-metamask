import { animate, motion, useMotionValue } from "framer-motion";
import planet from "assets/img/planet.webp";

interface PlanetProps {
	hasAnimation: boolean;
}

const Planet = ({ hasAnimation }: PlanetProps) => {
	const transition = { duration: 3, yoyo: 1, ease: "linear" };
	const transition_dot_1 = {
		duration: 0.5,
		yoyo: 1,
		ease: "easeOut",
	};
	const transition_dot_2 = {
		duration: 1,
		delay: 1.38,
		yoyo: 1,
		ease: "easeOut",
	};
	const transition_dot_3 = {
		duration: 1,
		delay: 2.92,
		yoyo: 1,
		ease: "easeOut",
	};

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	/**
	 TODO: Bad If statements, find a better solution in the future!
	*/
	const handleMouseMove = (
		e: React.MouseEvent<SVGCircleElement, MouseEvent>
	) => {
		const rect = e.currentTarget.getBoundingClientRect();

		if (
			e.clientX - rect.left - rect.width / 2 > 0 &&
			e.clientY - rect.top - rect.height / 2 < 0
		) {
			animate(
				mouseX,
				e.clientX - rect.left - rect.width / 2 - rect.width / 4.5
			);
			animate(
				mouseY,
				e.clientY - rect.top - rect.height / 2 + rect.width / 4.5
			);
		} else if (
			e.clientX - rect.left - rect.width / 2 < 0 &&
			e.clientY - rect.top - rect.height / 2 > 0
		) {
			animate(
				mouseX,
				e.clientX - rect.left - rect.width / 2 + rect.width / 4.5
			);
			animate(
				mouseY,
				e.clientY - rect.top - rect.height / 2 - rect.width / 4.5
			);
		} else if (
			e.clientX - rect.left - rect.width / 2 < 0 &&
			e.clientY - rect.top - rect.height / 2 < 0
		) {
			animate(
				mouseX,
				e.clientX - rect.left - rect.width / 2 + rect.width / 4.5
			);
			animate(
				mouseY,
				e.clientY - rect.top - rect.height / 2 + rect.width / 4.5
			);
		} else if (
			e.clientX - rect.left - rect.width / 2 > 0 &&
			e.clientY - rect.top - rect.height / 2 > 0
		) {
			animate(
				mouseX,
				e.clientX - rect.left - rect.width / 2 - rect.width / 4.5
			);
			animate(
				mouseY,
				e.clientY - rect.top - rect.height / 2 - rect.width / 4.5
			);
		} else {
			animate(mouseX, e.clientX - rect.left - rect.width / 2);
			animate(mouseY, e.clientY - rect.top - rect.height / 2);
		}
	};

	return (
		<div className="circle">
			<motion.svg
				width="526"
				height="526"
				viewBox="0 0 526 526"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="263" cy="263" r="263" fill="#212124" />
				<g filter="url(#filter0_f_0_1)">
					<circle cx="263" cy="263" r="263" fill="#171719" />
				</g>
				<rect
					x="202"
					y="8"
					width="80"
					height="30"
					rx="15"
					fill="white"
				/>
				<text
					className="text"
					fill="#1E1E20"
					x="213"
					y="28"
					pointerEvents="none"
					style={{ userSelect: "none" }}
				>
					Q1 2020
				</text>
				<g filter="url(#filter1_dd_0_1)">
					<circle cx="263" cy="23" r="6" fill="white" />
				</g>
				<circle cx="263" cy="23" r="3" fill="#E75626" />
				<circle cx="263" cy="263" r="223" fill="#1E1E20" />
				<circle cx="263" cy="263" r="191.5" stroke="#323232" />
				<circle cx="263" cy="263" r="184.5" stroke="#323232" />
				{hasAnimation ? (
					<>
						<motion.circle
							initial={{ pathLength: 0, opacity: 1 }}
							animate={{ pathLength: 0.5, opacity: 1 }}
							transition={transition}
							cx="263"
							cy="263"
							r="240"
							className="circle__svg"
						/>
						<motion.circle
							initial={{ scale: 0, opacity: 1 }}
							animate={{ scale: 1, opacity: 1 }}
							cx="263"
							cy="23"
							r="3"
							fill="var(--main-color)"
							transition={transition_dot_1}
						/>
						<motion.circle
							initial={{ scale: 0, opacity: 1 }}
							animate={{ scale: 1, opacity: 1 }}
							cx="503"
							cy="263"
							r="3"
							fill="var(--main-color)"
							transition={transition_dot_2}
						/>
						<motion.circle
							initial={{ scale: 0, opacity: 1 }}
							animate={{ scale: 1, opacity: 1 }}
							cx="263"
							cy="503"
							r="3"
							fill="var(--main-color)"
							transition={transition_dot_3}
						/>
					</>
				) : (
					<>
						<motion.circle
							animate={{ pathLength: 0.5, opacity: 1 }}
							cx="263"
							cy="263"
							r="240"
							className="circle__svg"
						/>
						<motion.circle
							cx="263"
							cy="23"
							r="3"
							fill="var(--main-color)"
						/>
						<motion.circle
							cx="503"
							cy="263"
							r="3"
							fill="var(--main-color)"
						/>
						<motion.circle
							cx="263"
							cy="503"
							r="3"
							fill="var(--main-color)"
						/>{" "}
					</>
				)}
				<defs>
					<filter
						id="filter0_f_0_1"
						x="0"
						y="0"
						width="526"
						height="526"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="11"
							result="effect1_foregroundBlur_0_1"
						/>
					</filter>
					<filter
						id="filter1_dd_0_1"
						x="249"
						y="8"
						width="28"
						height="28"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="2" dy="2" />
						<feGaussianBlur stdDeviation="3" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.195833 0 0 0 0 0.195833 0 0 0 0 0.195833 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_0_1"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-2" dy="-2" />
						<feGaussianBlur stdDeviation="3" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow_0_1"
							result="effect2_dropShadow_0_1"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow_0_1"
							result="shape"
						/>
					</filter>
				</defs>
				{hasAnimation ? (
					<motion.circle
						cx="263"
						cy="263"
						r="263"
						fill="transparent"
						onMouseMove={handleMouseMove}
						onMouseEnter={handleMouseMove}
						onMouseLeave={(e) => {
							animate(mouseX, 0);
							animate(mouseY, 0);
						}}
						className="circle_detector"
					/>
				) : null}
			</motion.svg>
			<motion.div
				className="image"
				style={{
					translateX: mouseX,
					translateY: mouseY,
					transition: "transform 3s linear",
					backgroundImage: `url(${planet})`,
				}}
			/>
		</div>
	);
};

export default Planet;
