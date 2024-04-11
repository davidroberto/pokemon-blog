import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return (
    <section>
      <h2>Les pokemons :</h2>

      {pokemons.map((pokemon) => {
        return (
          <article key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
          </article>
        );
      })}
    </section>
  );
};

export default ListPokemons;
