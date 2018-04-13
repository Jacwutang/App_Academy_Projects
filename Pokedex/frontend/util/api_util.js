export const fetchAllPokemon = () => (
  $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
);

// fetchAllPokemon().then(
//   (pokemon) => console.log(receiveAllPokemon(pokemon))
// )
