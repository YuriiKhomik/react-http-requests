import { Component } from "react";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      // console.log("prevProps.pokemonName: ", prevProps.pokemonName);
      // console.log("this.props.pokemonName : ", this.props.pokemonName);
      // console.log("we'll do fetch");
      this.setState({ loading: true, pokemon: null });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(
              new Error(`There is no pokemon with name ${nextName}`)
            );
          })
          .then((pokemon) => this.setState({ pokemon }))
          .catch((error) => this.setState({ error }))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>loading.......</div>}
        {!pokemonName && <div>please enter pokemon's name</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              width="240"
              alt={pokemon.name}
            />
          </div>
        )}
      </div>
    );
  }
}
