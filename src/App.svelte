<script>
	import AddTodo from './components/AddTodo.svelte'
	import TodoList from './components/TodoList.svelte'
</script>

<main
	class="bg-blue-500 py-8 flex flex-col items-center gap-10 w-full h-screen"
>
	<TodoList />
	<AddTodo />
</main>
