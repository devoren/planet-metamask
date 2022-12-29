import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	PersistConfig,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/es/storage";

import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { viewerModel } from "entities/viewer";
import { api } from "shared/api";
import { APP_SECRET_KEY } from "shared/config";

const encryptor = encryptTransform({
	secretKey: APP_SECRET_KEY,
	onError: function (error) {
		// Handle the error.
		console.log("error: ", error);
		persistor.purge();
	},
});

const persistConfig: PersistConfig<any> = {
	key: "root",
	storage: storage,
	version: 1,
	whitelist: ["viewer"],
	blacklist: ["api"],
	transforms: [encryptor],
};

export const rootReducer = combineReducers({
	viewer: viewerModel.reducer,
	[api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(api.middleware),
	devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
