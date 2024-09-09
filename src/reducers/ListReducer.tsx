import { ListType } from "@/types/ListType";

type AddAction = {
	type: "add";
	payload: {
		value: string;
	};
};
type RemoveAction = {
	type: "remove";
	payload: {
		id: number;
	};
};
type SetList = {
	type: "setList";
	payload: {
		newList: ListType[];
	};
};
export type Action = AddAction | RemoveAction | SetList;

export default function ListReducer(list: ListType[], action: Action) {
	switch (action.type) {
		case "add":
			return [...list, { id: list.length, value: action.payload.value }];
		case "remove":
			return list.filter((item) => item.id !== action.payload.id);
		case "setList":
			return action.payload.newList;
		default:
			return list;
	}
}
