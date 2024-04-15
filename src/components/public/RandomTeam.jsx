import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomTeam = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return (
    <section>
      <h2>Team aléatoire : </h2>

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

export default RandomTeam;
