"use client";

import Input from "@/components/Input";
import List from "@/components/List";
import ListReducer from "@/reducers/ListReducer";
import { useEffect, useReducer, useState } from "react";

export default function Page() {
	// State for the input field
	const [inputValue, setInputValue] = useState<string>("");

	// State for the initial value from local storage
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		const storedValue = window.localStorage.getItem("USER_LIST_VALUE");
		return storedValue ? JSON.parse(storedValue) : [];
	});

	// State for the task list, managed by a reducer
	const [list, dispatch] = useReducer(ListReducer, localStorageValue || []);

	//Adds a new item to the list
	const addItem = (value: string) => {
		if (value.trim() !== "") {
			dispatch({ type: "add", payload: { value } });
			setInputValue("");
		}
	};

	//Removes an item from the list
	const removeItem = (id: number) => {
		dispatch({ type: "remove", payload: { id } });
	};

	// Effect to handle changes in local storage (for cross-tab sync)
	useEffect(() => {
		const handleLocalStorageChange = () => {
			const newValue = window.localStorage.getItem("USER_LIST_VALUE");
			if (newValue !== localStorageValue) {
				setLocalStorageValue(newValue);
				if (newValue !== null)
					dispatch({
						type: "setList",
						payload: {
							newList: JSON.parse(newValue),
						},
					});
			}
		};
		window.addEventListener("storage", handleLocalStorageChange);
		return () => {
			window.removeEventListener("storage", handleLocalStorageChange);
		};
	}, []);

	// Effect to update local storage when the list changes
	useEffect(() => {
		if (list) {
			window.localStorage.setItem("USER_LIST_VALUE", JSON.stringify(list));
		}
	}, [list]);

	return (
		<div className="flex flex-col items-center justify- mt-4">
			<h1 className="text-white text-4xl font-bold mb-2">Lista de tarefas</h1>
			<Input value={inputValue} setValue={setInputValue} addItem={addItem} />
			<List list={list} removeItem={removeItem} />
		</div>
	);
}
