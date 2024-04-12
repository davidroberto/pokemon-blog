import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonsByTypePage from "./pages/PokemonsByTypePage";
import RandomTeamPage from "./pages/RandomTeamPage";
import SearchPage from "./pages/SearchPage";
import PokemonResistancePage from "./pages/PokemonsResistancePage";

///resistance/Pierre

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        <Route path="/pokemons-by-type/:type" element={<PokemonsByTypePage />} />
        <Route path="/random-team" element={<RandomTeamPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/resistance/:type" element={<PokemonResistancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
