import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (e) => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === "") {
      return toast.error("Type pokemon name");
    }

    this.setState({ pokemonName: "" });
    this.props.onSubmit(this.state.pokemonName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Find
        </button>
      </form>
    );
  }
}
