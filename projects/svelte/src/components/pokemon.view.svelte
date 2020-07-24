<script>
	import { pokemon } from '../store.js';

</script>
<section class="col">

		{#if $pokemon}

			 <div v-if="pokemon" class="card" style="width: 18rem;">
				<img src={$pokemon.sprites.front_default} alt={ $pokemon.name } class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">
						{ $pokemon.name }
					</h5>
				</div>
			</div>
			
		{/if}

</section>