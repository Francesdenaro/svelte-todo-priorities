<script>
	import { TodosStore } from '../store'
	import Card from './Card.svelte'

	let text = ''
	let priority = null

	const addTodo = (text, priority) => {
		const newTodo = {
			id: crypto.randomUUID(),
			text,
			priority,
		}
		if (text.lenght != 0 && priority) {
			TodosStore.update(current => [newTodo, ...current])
		}
	}
</script>

<Card>
	<form
		on:submit|preventDefault
		class="flex flex-col gap-4 w-full items-start justify-between"
	>
		<label class="flex flex-col gap-2 font-bold">
			Text
			<input
				bind:value={text}
				required
				type="text"
				class="border font-normal border-gray-200 rounded-md"
			/>
		</label>
		<label class="flex flex-col gap-2 font-bold">
			Priority
			<select
				bind:value={priority}
				class="border border-gray-300 font-normal rounded-md py-1 px-2"
				required
			>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>
		</label>
		<button
			on:click={() => addTodo(text, priority)}
			class="bg-sky-500 self-end text-white shadow-sm rounded-md py-1 px-4"
			>Add</button
		>
	</form>
</Card>
