import { Link, useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokemonSearch = event.target.searchPokemon.value;

    navigate("/search/" + pokemonSearch);
  };

  return (
    <header>
      <nav className="header-nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
          className="logo-nav"
        />

        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <input type="text" name="searchPokemon" />

          <input type="submit" value="Chercher" />
        </form>
      </nav>
    </header>
  );
};

export default Header;
