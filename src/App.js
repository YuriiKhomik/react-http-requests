import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonForm from "./Components/PokemonForm";
// import PokemonInfo from "./PokemonInfo/PokemonInfo";

export default class App extends Component {
  state = { pokemonName: "" };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
    console.log(pokemonName);
  };

  render() {
    // const { pokemon, loading } = this.state;
    return (
      <>
        {/* {loading && <h1>Loading...</h1>}
        {pokemon && <div>{pokemon.name}</div>} */}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
