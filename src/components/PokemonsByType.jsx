import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonsByType = () => {
  const { type } = useParams();

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return (
    <section>
      <h2>Les pokemons du type {type} :</h2>

      {pokemons.map((pokemon) => {
        return (
          <article key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            {pokemon.apiTypes.map((type) => {
              return <p key={type.name}>{type.name}</p>;
            })}

            <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
          </article>
        );
      })}
    </section>
  );
};

export default PokemonsByType;
