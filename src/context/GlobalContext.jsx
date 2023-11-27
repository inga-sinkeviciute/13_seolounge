import { createContext, useState } from "react";

export const initialContext = {
	luckyNumber: 0,
	updateLuckyNumber: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
	const [luckyNumber, setLuckyNumber] = useState(initialContext.luckyNumber);

	function updateLuckyNumber(newNumber) {
		setLuckyNumber(newNumber);
	}

	const value = {
		luckyNumber,
		updateLuckyNumber,
	};

	return (
		<GlobalContext.Provider value={value}>
			{props.children}
		</GlobalContext.Provider>
	);
}
