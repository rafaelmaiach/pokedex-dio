import state from './state';

export default {
	get pokemonsInfo() {
		return state.list.map(info => ({
			id: info.id,
			name: info.name,
			types: info.types.map(({ type }) => type.name),
			sprite: info.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
		}));
	},
};
