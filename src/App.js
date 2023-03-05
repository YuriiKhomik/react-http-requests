import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PokemonForm from "./Components/PokemonForm";
import PokemonInfo from "./Components/PokemonInfo";

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
    console.log(pokemonName);
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}
