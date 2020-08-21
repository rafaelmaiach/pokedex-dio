import Vue from 'vue';

const LIMIT = 25;
const OFFSET = 0;

export default Vue.observable({
	list: [],
	tmpList: [],
	listHasNext: false,
	listHasCompleted: false,
	listHasError: false,

	isSearching: false,
	isPokemonSearch: false,
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,

	pokemonId: null,
});
