import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from "vite-tsconfig-paths";
// import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		EnvironmentPlugin("all", { prefix: "VITE_" }),
		// vitePluginImp({
		// 	optimize: true,
		// }),
	],
	resolve: {
		alias: {
			buffer: "buffer/",
		},
	},
});
