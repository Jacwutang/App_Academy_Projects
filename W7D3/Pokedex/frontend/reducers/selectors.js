import values from 'lodash/values';


const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);


export default selectAllPokemon;
