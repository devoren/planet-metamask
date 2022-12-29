import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withStorePersist } from "./with-store-persist";
import { withDApp } from "./with-dapp";

export const withProviders = compose(
	withRouter,
	withStore,
	withStorePersist,
	withDApp
);
