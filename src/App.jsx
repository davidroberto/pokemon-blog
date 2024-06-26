import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonsByTypePage from "./pages/public/PokemonsByTypePage";
import PokemonDetailsPage from "./pages/public/PokemonDetailsPage";
import HomePage from "./pages/public/HomePage";
import RandomTeamPage from "./pages/public/RandomTeamPage";
import SearchPage from "./pages/public/SearchPage";
import PokemonResistancePage from "./pages/public/PokemonsResistancePage";
import AdminListPokemonsPage from "./pages/admin/AdminListPokemonsPage";
import CreatePokemonPage from "./pages/admin/CreatePokemonPage";
import UpdatePokemonPage from "./pages/admin/UpdatePokemonPage";
import LoginPage from "./pages/public/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        <Route path="/pokemons-by-type/:type" element={<PokemonsByTypePage />} />
        <Route path="/random-team" element={<RandomTeamPage />} />
        <Route path="/search/:searchText" element={<SearchPage />} />
        <Route path="/resistance/:type" element={<PokemonResistancePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/pokemons" element={<AdminListPokemonsPage />} />
        <Route path="/admin/pokemons/create" element={<CreatePokemonPage />} />
        <Route path="/admin/pokemons/update/:pokemonId" element={<UpdatePokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
