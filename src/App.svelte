<script>
	import AddTodo from './components/AddTodo.svelte'
	import TodoList from './components/TodoList.svelte'
</script>

<main class="bg-blue-500 w-full h-screen">
	<div class="max-w-5xl mx-auto w-1/2 py-8 gap-4 flex flex-col items-center">
		<AddTodo />
		<TodoList />
	</div>
</main>
