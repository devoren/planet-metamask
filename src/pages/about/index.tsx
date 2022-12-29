import Layout from "antd/es/layout";
import Spin from "antd/es/spin";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "shared/api";
import { User } from "shared/api/model";
import { useTitle } from "shared/lib/dom";
import Planet from "widgets/planet";
import styles from "./styles.module.scss";

interface SectionProps {
	children: React.ReactNode;
}

const Fields = ({ user }: { user: User }) => {
	return (
		<div className={"fields"}>
			<div className={"field"}>
				<p className={"label"}>Name</p>
				<p className={"field_data"}>{user?.username}</p>
			</div>
			<div className={"field"}>
				<p className={"label"}>Email</p>
				<p className={"field_data"}>{user?.email}</p>
			</div>
			<div className={"field"}>
				<p className={"label"}>Wallet</p>
				<p className={"field_data"}>{user?.address}</p>
			</div>
		</div>
	);
};

const SectionWrapper = ({ children }: SectionProps) => (
	<section className={styles.rootSection}>{children}</section>
);

const AboutPage = () => {
	useTitle("Planet - About");
	const { id } = useParams();
	const { data: user, isFetching, isSuccess } = useGetUserByIdQuery(id);

	return (
		<Layout.Content>
			<SectionWrapper>
				<div className={styles.data}>
					<h1>Personal Data</h1>
					{isFetching ? (
						<Spin delay={500} size="large" />
					) : (
						isSuccess && <Fields user={user} />
					)}
				</div>
				<div className={styles.widget}>
					<Planet hasAnimation={false} />
				</div>
			</SectionWrapper>
		</Layout.Content>
	);
};

export default AboutPage;
