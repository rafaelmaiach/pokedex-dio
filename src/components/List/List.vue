<template>
	<ul class="list text--white bg--black">
		<p v-if="isSearching" class="list--message">Looking for the pokemon</p>
		<p v-else-if="hasSearchError" class="list--message">We couldn't find this pokemon</p>
		<ListItem v-else-if="isPokemonSearch" v-bind="pokemonsList[0]" />
		<PokemonDescription v-else-if="pokemonId" :id="pokemonId" />
		<template v-else>
			<ListItem v-for="pokemon in pokemonsList" :key="pokemon.id" v-bind="pokemon" />
			<infinite-loading @infinite="infiniteHandler" />
		</template>
	</ul>
</template>

<script>
	import { state, getters, actions } from '@/store';

	import PokemonDescription from '@/components/PokemonDescription/PokemonDescription.vue';
	import ListItem from './ListItem.vue';

	export default {
		name: 'List',
		components: {
			ListItem,
			PokemonDescription,
		},
		computed: {
			pokemonsList() {
				return getters.pokemonsInfo;
			},
			isSearching() {
				return state.isSearching;
			},
			isPokemonSearch() {
				return state.isPokemonSearch;
			},
			hasSearchError() {
				return state.searchHasError;
			},
			pokemonId() {
				return state.pokemonId;
			},
		},
		methods: {
			async infiniteHandler($state) {
				await actions.getPokemons();

				if (state.listHasNext) {
					$state.loaded();
					return;
				}

				if (state.listHasCompleted) {
					$state.complete();
					return;
				}

				if (state.listHasError) {
					$state.error();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.list {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border: 10px solid color(white);
		border-radius: 8px;
		padding: 0 8px 8px 0;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		@media (min-width: $viewport-medium) {
			max-height: 72%;
			border: 20px solid color(white);
		}

		&--message {
			text-align: center;
			margin-top: 8px;
		}
	}
</style>
