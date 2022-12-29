import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "widgets/loader";

export const withRouter = (component: () => React.ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense fallback={<Loader overlay />}>{component()}</Suspense>
		</BrowserRouter>
	);
