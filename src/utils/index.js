// eslint-disable-next-line import/prefer-default-export
export const parsePokemonInfo = info => ({
	id: info.id,
	name: info.name,
	types: info.types.map(({ type }) => type.name),
	sprite: info.sprites.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
	stats: info.stats,
});
