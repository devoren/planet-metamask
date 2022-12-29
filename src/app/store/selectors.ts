import { RootState } from "./types";

export const selectCurrentUser = (state: RootState) => state.viewer.user;
