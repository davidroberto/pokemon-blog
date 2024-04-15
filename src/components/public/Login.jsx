import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const id = event.target.identifiant.value;
    const password = event.target.password.value;

    const json = JSON.stringify(id, password);

    fetch("https://pokebuildapi.fr/api/v1/login", {
      method: "POST",
      body: json,
    })
      .then((response) => {
        return response.json();
      })
      // on utilise catch car l'url n'existe pas et on va récupérer une erreur
      // donc on fait notre code dans le catch. Mais il faudrait le faire dans un then
      // avec le vrai token
      .catch((data) => {
        const token = "eznfjezcoiezhoifzejopfezjiocneziodjiojiod";

        Cookies.set("token", token);
        navigate("/admin/pokemons");
      });
  };

  return (
    <section>
      <form onSubmit={handleLogin}>
        <label>
          Identifiant
          <input type="text" name="identifiant" />
        </label>

        <label>
          Mot de passe
          <input type="password" name="password" />
        </label>

        <input type="submit" />
      </form>
    </section>
  );
};

export default Login;
