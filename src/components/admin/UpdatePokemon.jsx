import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdatePokemon = () => {
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
      <form>
        <div>
          <label>
            Nom :
            <input type="text" name="name" defaultValue={pokemon && pokemon.name} />
          </label>
        </div>

        <div>
          <label>
            Generation :
            <input type="text" name="generation" defaultValue={pokemon && pokemon.apiGeneration} />
          </label>
        </div>

        <input type="submit" value="Modifier le pokemon" />
      </form>
    </section>
  );
};

export default UpdatePokemon;
