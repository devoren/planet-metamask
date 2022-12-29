import { Routes, Route } from "react-router";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const AboutPage = lazy(() => import("./about"));

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about/:id" element={<AboutPage />} />
			<Route path="*" element={<Navigate replace to="/" />} />
		</Routes>
	);
};
