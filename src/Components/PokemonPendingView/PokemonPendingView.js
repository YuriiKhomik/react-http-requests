import { ImSpinner } from "react-icons/im";
import pendingImage from "images/pending.png";
import "./PokemonPendingView.css";
import PokemonDataView from "Components/PokemonDataView";

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className="icon-spin" />
        Loading...
        <PokemonDataView pokemon={pokemon} />
      </div>
    </div>
  );
}
