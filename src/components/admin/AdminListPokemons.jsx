import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminListPokemons = () => {
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

  const handleDeletePokemon = (event, pokemonId) => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId, {
      method: "DELETE",
    });
  };

  return (
    <main>
      <h2>Gérer les pokemons :</h2>

      <table>
        <tr>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
        {pokemons.map((pokemon) => {
          return (
            <tr key={pokemon.id}>
              <td>{pokemon.name}</td>
              <td>
                <Link to={`/admin/pokemons/update/${pokemon.id}`}>Modifier</Link>
                {/* 
					si je veux passer un parametre autre que event
					à fonction d'event listener, je doit créer une fonction
					flêchée qui appelle ma fonction. Sinon la fonction d'event listener
					sera executée même si l'utilisateur ne clique pas
				 */}
                <button onClick={(event) => handleDeletePokemon(event, pokemon.id)}>Supprimer</button>
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};

export default AdminListPokemons;
