<script>
	import { onMount } from 'svelte';
	import { pokemons, pokemon } from '../store.js'

	async function getAllPokemons ( ) { 
		let response = await fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())
		pokemons.set(response.results);
	}

	async function getPokemonInfo (_pokemon) { 
		const result = await fetch(_pokemon.url).then(response => response.json())
		pokemon.set(result);
	}

	onMount(getAllPokemons)

</script>

<section class="col">
	<nav class="list-group">
		{#each $pokemons as pokemon }
			<button class="list-group-item" on:click={getPokemonInfo(pokemon)}>
				{pokemon.name}
			</button>
		{/each}
	</nav>
</section>