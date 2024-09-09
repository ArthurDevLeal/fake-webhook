import { Action } from "@/reducers/ListReducer";
import { ListType } from "@/types/ListType";

export default function List({ list, dispatch }: { list: ListType[]; dispatch: (action: Action) => void }) {
	const removeItem = (id: number) => {
		dispatch({ type: "remove", payload: { id } });
	};
	return (
		<div>
			{list.map((item) => {
				return (
					<li key={item.id}>
						<button onClick={() => removeItem(item.id)}>X</button>
						{item.value}
					</li>
				);
			})}
		</div>
	);
}
