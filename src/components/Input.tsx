import { Action } from "@/reducers/ListReducer";

type InputType = {
	value: string;
	setValue: (value: string) => void;
	addItem: (value: string, id: number) => void;
};

export default function Input({ value, setValue, addItem }: InputType) {
	return (
		<div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<button onClick={() => addItem(value)}>Adicionar à lista</button>
		</div>
	);
}
