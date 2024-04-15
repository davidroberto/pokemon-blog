const CreatePokemon = () => {
  const handleCreatePokemon = (event) => {
    event.preventDefault();

    // je récupère les infos du pokemon à créer via le form
    const name = event.target.name.value;
    const generation = event.target.generation.value;

    // je créé un objet avec les infos, que je transforme en json
    const json = JSON.stringify({
      name: name,
      generation: generation,
    });

    // je fais un appel fetch de type POST, avec en body le JSON
    fetch("https://pokebuildapi.fr/api/v1/pokemon", {
      method: "POST",
      body: json,
    });
  };

  return (
    <section>
      <h2>Créer un pokemon :</h2>

      <form onSubmit={handleCreatePokemon}>
        <div>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label>
            Generation :
            <input type="text" name="generation" />
          </label>
        </div>

        <input type="submit" value="Créer le pokemon" />
      </form>
    </section>
  );
};

export default CreatePokemon;
