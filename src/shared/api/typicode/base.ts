import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "shared/config";

const baseUrl = API_URL;

const baseQuery = fetchBaseQuery({
	baseUrl: baseUrl,
	cache: "default",
});

export const api = createApi({
	reducerPath: "api",
	baseQuery,
	tagTypes: ["PageData"],
	refetchOnMountOrArgChange: true,
	refetchOnReconnect: true,
	endpoints: () => ({}),
});
