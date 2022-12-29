import { Routing } from "pages";
import { Header } from "widgets/header";
import { withProviders } from "./hocs";
import "./index.scss";

const App = () => (
	<div className="app">
		<Header />
		<Routing />
	</div>
);
export default withProviders(App);
