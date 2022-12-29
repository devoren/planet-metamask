import Layout from "antd/es/layout";
import React from "react";
import { useLocalStorage } from "shared/lib/browser";
import Alert from "widgets/alert";
import Hero from "./Hero";
import List from "./List";
import styles from "./styles.module.scss";

const sections = [
	{
		id: 1,
		Section: Hero,
	},
	{
		id: 2,
		Section: List,
	},
];

interface SectionProps {
	children: React.ReactNode;
}

const SectionWrapper = ({ children }: SectionProps) => (
	<section className={styles.rootSection}>{children}</section>
);

const Sections = () => {
	const [isExtensionInstalled, setIsExtensionInstalled] = useLocalStorage(
		"extensionInstalled",
		false
	);

	const handleExtensionAlert = () => {
		setIsExtensionInstalled((prev) => !prev);
	};

	return (
		<Layout.Content>
			{!isExtensionInstalled ? (
				<Alert onClick={handleExtensionAlert} />
			) : null}
			{sections.map(({ id, Section }) => (
				<SectionWrapper key={id}>
					<Section />
				</SectionWrapper>
			))}
		</Layout.Content>
	);
};

export default Sections;
