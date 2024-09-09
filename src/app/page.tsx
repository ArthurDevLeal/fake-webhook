"use client";

import Input from "@/components/Input";
import List from "@/components/List";
import ListReducer from "@/reducers/ListReducer";
import { ListType } from "@/types/ListType";
import { useReducer, useState } from "react";

export default function Page() {
	// States
	const [inputValue, setInputValue] = useState<string>("");
	const [list, dispatch] = useReducer(ListReducer, []);
	return (
		<div>
			<Input value={inputValue} setValue={setInputValue} dispatch={dispatch} />
			<List list={list} dispatch={dispatch} />
		</div>
	);
}
