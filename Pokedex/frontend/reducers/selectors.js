import values from 'lodash/values';


export const selectAllPokemon = (state) => (
  values(state.entities.pokemon)
);

export const selectPokemonItem = (state) => (

    values(state.entities.items)

);
