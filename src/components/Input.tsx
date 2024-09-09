
type InputType = {
	value: string;
	setValue: (value: string) => void;
	addItem: (value: string) => void;
};

export default function Input({ value, setValue, addItem }: InputType) {
	return (
		<div className="bg-white rounded-md">
			<input type="text" placeholder="Adicione uma tarefa aqui" value={value} onChange={(e) => setValue(e.target.value)} className="text-black m-2"/>
			<button onClick={() => addItem(value) } className="text-black p-2 border-l border-gray-200">Adicionar à lista</button>
		</div>
	);
}
