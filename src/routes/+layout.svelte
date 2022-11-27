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
		height: 78vh;
		padding-top: 2em;
		padding-left: 5em;
		padding-right: 5em;
		padding-bottom: 2em;
	}
</style>
