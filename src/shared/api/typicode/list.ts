import { api } from "./base";
import { User, PageData } from "./models";

type getListParams = { page: number; perPage: number };

function providesList<R extends User[], T extends string>(
	result: R | undefined,
	tagType: T
) {
	return result
		? [
				...result.map(({ id }) => ({
					type: tagType,
					id,
				})),
				{ type: tagType, id: "LIST" },
		  ]
		: [{ type: tagType, id: "LIST" }];
}

const listApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getList: builder.query<PageData, getListParams | undefined>({
			query: ({ page, perPage }: getListParams) => ({
				url: `/data?page=${page}&perPage=${perPage}`,
			}),
			providesTags: (result) => providesList(result?.items, "PageData"),
			// Only have one cache entry because the arg always maps to one string
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			// Always merge incoming data to the cache entry
			merge: (currentCache, newData) => {
				const { items: currentItems } = currentCache;
				const { items: newItems } = newData;
				currentItems.push(...newItems);
			},
			// Refetch when the page arg changes
			forceRefetch({ currentArg, previousArg }) {
				return (
					currentArg?.page !== previousArg?.page ||
					currentArg?.perPage !== previousArg?.perPage
				);
			},
		}),
		getUserById: builder.query<User, string | undefined>({
			query: (id) => ({
				url: `/data/id/${id}`,
			}),
			providesTags: (result, error, id) => [{ type: "PageData", id }],
		}),
		getUserByAddress: builder.query<User, string>({
			query: (address) => ({
				url: `/data/address/${address}`,
			}),
			providesTags: (result, error, id) => [{ type: "PageData", id }],
		}),
	}),
	overrideExisting: true,
});

export const {
	useGetListQuery,
	useLazyGetListQuery,
	useGetUserByIdQuery,
	useGetUserByAddressQuery,
} = listApi;

export default listApi;
