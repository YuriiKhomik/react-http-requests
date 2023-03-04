import errorImage from "images/error.jpg";

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadCat" />
      <p>{message}</p>
    </div>
  );
}
