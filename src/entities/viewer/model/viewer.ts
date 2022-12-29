import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "shared/api/model";

export type AuthState = {
	user: User | null;
};

const initialState: AuthState = {
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		getAccess: (state, action: PayloadAction<AuthState>) => {
			const { user } = action.payload;
			state.user = user;
		},
	},
});

export const { getAccess } = authSlice.actions;

export const reducer = authSlice.reducer;
export default authSlice;
