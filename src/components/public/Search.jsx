import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { searchText } = useParams();

  const [pokemonFound, setPokemonFound] = useState(null);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + searchText)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonFound(data);
      });
  }, [searchText]);

  return (
    <section>
      <p>Résultats de recherche : </p>

      {pokemonFound && (
        <article key={pokemonFound.id}>
          <h3>{pokemonFound.name}</h3>
          <img src={pokemonFound.image} alt={pokemonFound.name} />
          {pokemonFound.apiTypes.map((type) => {
            return <p key={type.name}>{type.name}</p>;
          })}

          <Link to={`/pokemon-details/${pokemonFound.id}`}>Voir le détail du pokemon</Link>
        </article>
      )}
    </section>
  );
};

export default Search;
