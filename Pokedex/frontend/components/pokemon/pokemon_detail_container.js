import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectAllPokemon, selectPokemonItem} from '../../reducers/selectors';
import {requestSinglePokemon} from '../../actions/pokemon_actions';


const mapStateToProps = (state,ownProps) => ({
  // pokemon: selectSinglePokemon(state)
  // let pokemon = state.entities.pokemon[ownProps.match.params.pokemonId],
  // return (
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: selectPokemonItem(state)

});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
