import { api } from "./typicode/base";
import listApi, {
	useGetListQuery,
	useGetUserByAddressQuery,
	useGetUserByIdQuery,
	useLazyGetListQuery,
} from "./typicode/list";

export {
	api,
	listApi,
	useGetListQuery,
	useLazyGetListQuery,
	useGetUserByIdQuery,
	useGetUserByAddressQuery,
};
