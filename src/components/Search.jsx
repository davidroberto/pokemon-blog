import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchText = event.target.searchPokemon.value;

    if (searchText === "") {
      setError("Merci de rentrer un pokemon");
      return;
    }

    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + searchText)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setError("Le nom du pokemon est invalide");
      });
  };

  return (
    <section>
      <h2>Rechercher un pokémon : </h2>

      <form onSubmit={handleSearch}>
        <input type="text" name="searchPokemon" />

        <input type="submit" value="Chercher" />
      </form>

      {error && <p>{error}</p>}

      {pokemon && (
        <article key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
          {pokemon.apiTypes.map((type) => {
            return <p key={type.name}>{type.name}</p>;
          })}

          <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
        </article>
      )}
    </section>
  );
};

export default Search;
