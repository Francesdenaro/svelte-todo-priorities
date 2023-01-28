<script>
	import { TodosStore } from '../store'
	import Card from './Card.svelte'

	export let todo

	const getColor = priority => {
		switch (priority) {
			case 'Low':
				return 'bg-green-500'
			case 'Medium':
				return 'bg-blue-500'
			case 'High':
				return 'bg-red-500'
		}
	}

	const deleteTodo = todoId => {
		TodosStore.update(current => {
			return current.filter(todo => todoId !== todo.id)
		})
	}
</script>

<Card>
	<div class="flex justify-between w-full">
		<h2 class="font-semibold text-lg">{todo.text}</h2>
		<button on:click={() => deleteTodo(todo.id)} class="right-6 top-3">X</button
		>
	</div>
	<div
		class="{getColor(
			todo.priority
		)} text-white px-2 py-1 self-end rounded-lg shadow-md text-sm"
	>
		{todo.priority}
	</div>
</Card>
