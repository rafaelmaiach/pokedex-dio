import Factory from './factory';

const coreApiUrl = 'https://pokeapi.co/api/v2';
const commonInstance = Factory(coreApiUrl);

export default commonInstance;
