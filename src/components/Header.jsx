import { Link } from "react-router-dom";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
