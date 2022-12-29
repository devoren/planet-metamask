import React from "react";
import Sections from "./sections";
import { useTitle } from "shared/lib/dom";

const HomePage = () => {
	useTitle("Planet - Metaverse");

	return <Sections />;
};

export default HomePage;
