import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./";
import { rootReducer } from "./";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
