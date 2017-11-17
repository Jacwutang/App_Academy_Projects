import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
      case RECEIVE_ALL_POKEMON:
        newState = merge({},state, action.pokemon);
        return newState;
      case RECEIVE_SINGLE_POKEMON:
        // newState = merge({}, state, action.pokemon);
        // return newState;
        const poke = action.payload.pokemon;
        poke["items"] = [];
        const itemsPayload = action.payload.items;
        for (var i = 0; i < itemsPayload.length; i++) {
          poke["items"].push(itemsPayload[i].id);
        }
        return merge({}, state, {[poke.id]: poke});

      default:
        return state;



    }



};


export default pokemonReducer;
