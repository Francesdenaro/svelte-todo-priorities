<script>
	import { TodosStore } from '../store'
	import TodoItem from './TodoItem.svelte'
</script>

<div class="w-full flex flex-col gap-8">
	{#each $TodosStore as todo (todo.id)}
		<TodoItem {todo} />
	{/each}
</div>
