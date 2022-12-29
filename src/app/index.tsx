import Layout from "antd/es/layout";
import { Routing } from "pages";
import { Header } from "widgets/header";
import { withProviders } from "./hocs";
import "./index.scss";

const App = () => (
	<div className="app">
		<Layout>
			<Header />
			<Routing />
		</Layout>
	</div>
);
export default withProviders(App);
