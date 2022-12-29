import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInfiniteScroll from "./useInfiniteScroll";

export const useVisibility = (initialVisible = false) => {
	const [visible, setVisible] = useState(initialVisible);
	return {
		visible,
		close: () => setVisible(false),
		open: () => setVisible(true),
	};
};

export const useRedirectOn = (
	value: boolean,
	redirectTo: string,
	preventScrollReset?: boolean
) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (value) {
			navigate(redirectTo, {
				preventScrollReset,
			});
		}
	}, [value, redirectTo, navigate]);
};

export default useInfiniteScroll;
