export interface User {
	id: number;
	username: string;
	email: string;
	address: string;
}

export interface PageMeta {
	currentPage: number;
	perPage: number;
	totalPages: number;
}

export interface PageData {
	meta: PageMeta;
	items: User[];
}
