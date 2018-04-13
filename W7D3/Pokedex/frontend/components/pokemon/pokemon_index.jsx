import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    //when component loads do this =>
    this.props.requestAllPokemon();
    //this fires off the redux cycle
  }




  render(){
    //extract pokemon from this.props
    const {pokemon} = this.props;

    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem
      key={poke.id}
      poke={poke}
      />

      )
    );


    return(
      <ul>
        {pokemonItems}
      </ul>

    );

  }




}


export default PokemonIndex;
