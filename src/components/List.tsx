import { ListType } from "@/types/ListType";

export default function List({ list, removeItem }: { list: ListType[]; removeItem: (id: number) => void }) {
	return (
		<div>
			{list.map((item) => {
				return (
					<li key={item.id} className="text-black bg-white p-2 rounded-md w-[400px] mt-4 truncate">
						<button onClick={() => removeItem(item.id)} className="bg-red-300 px-1 rounded-md mr-1">
							X
						</button>
						{item.value}
					</li>
				);
			})}
		</div>
	);
}
