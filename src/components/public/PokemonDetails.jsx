import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, [pokemonId]);

  return (
    <section>
      {pokemon && (
        <article>
          <h1>Détails du pokemon : </h1>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </article>
      )}
    </section>
  );
};

export default PokemonDetails;
