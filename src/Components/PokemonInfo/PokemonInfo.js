import PokemonDataView from "Components/PokemonDataView";
import { Component } from "react";
import PokemonErrorView from "Components/PokemonErrorView";
import PokemonPendingView from "Components/PokemonPendingView";
import pokemonApi from "services/pokemon-api";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      // console.log("prevProps.pokemonName: ", prevProps.pokemonName);
      // console.log("this.props.pokemonName : ", this.props.pokemonName);
      // console.log("we'll do fetch");
      this.setState({ status: "pending" });
      pokemonApi
        .fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    // VIA STATE MACHINE

    if (status === "idle") {
      return <div>please enter pokemon's name</div>;
    }

    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }

    // return (
    //   <div>
    //     {error && <h1>{error.message}</h1>}
    //     {loading && <div>loading.......</div>}
    //     {!pokemonName && <div>please enter pokemon's name</div>}
    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other["official-artwork"].front_default}
    //           width="240"
    //           alt={pokemon.name}
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}
