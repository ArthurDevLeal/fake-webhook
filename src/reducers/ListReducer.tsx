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
export type Action = AddAction | RemoveAction;

export default function ListReducer(list: ListType[], action: Action) {
	switch (action.type) {
		case "add":
			return [...list, { id: action.payload.id, value: action.payload.value }];
		case "remove":
			return list.filter((item) => item.id !== action.payload.id);
		default:
			return list;
	}
}
