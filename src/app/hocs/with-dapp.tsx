import { Config, DAppProvider, Mainnet } from "@usedapp/core";

const config: Config = {
	readOnlyChainId: Mainnet.chainId,
};

export const withDApp = (component: () => React.ReactNode) => () =>
	<DAppProvider config={config}>{component()}</DAppProvider>;
