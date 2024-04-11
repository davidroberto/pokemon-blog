import { useEffect, useState } from "react";

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
          </article>
        );
      })}
    </section>
  );
};

export default ListPokemons;
