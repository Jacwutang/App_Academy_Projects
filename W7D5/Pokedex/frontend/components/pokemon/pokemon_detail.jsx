import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import {Route} from 'react-router-dom';
import Item from '../items/item';
class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId)
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);

  }

  render(){
    if (!this.props.pokemon) {
      return null;
    }


    const {pokemon, items} = this.props;


    return(

      <section>
        <br/>
        <hr/>
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
        </ul>
        <ul>
          {items.map(item => <Item key={item.name} item={item} />)}


        </ul>


        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </section>

    );
  }






}

export default PokemonDetail;
