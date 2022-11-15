<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Built with SvelteKit</p>
	</footer>
</div>

<style>
	footer {
		text-align: center;
	}

	main {
		height: 83vh;
	}
</style>
