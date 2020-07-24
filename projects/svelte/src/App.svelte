<script>
	import PokemonList from './components/pokemon.list.svelte';
	import PokemonView from './components/pokemon.view.svelte';
</script>

<section class="app container row">
		<PokemonList />
		<PokemonView />
</section>

<style type="text/scss" global>
	@import "./assets/scss/main.scss";
</style>