import { persistor } from "app/store";
import { PersistGate } from "redux-persist/integration/react";

export const withStorePersist = (component: () => React.ReactNode) => () =>
	(
		<PersistGate loading={null} persistor={persistor}>
			{component()}
		</PersistGate>
	);
