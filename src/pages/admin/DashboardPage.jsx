import { useEffect, useState } from "react";

const DashboardPage = () => {
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
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};

export default DashboardPage;
