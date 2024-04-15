const CreatePokemon = () => {
  const handleCreatePokemon = (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("name", event.target.name.value);
    formData.append("generation", event.target.generation.value);
    formData.append("image", event.target.image.value);

    // je fais un appel fetch de type POST, avec en body le JSON
    fetch("https://pokebuildapi.fr/api/v1/pokemon", {
      method: "POST",
      body: formData,
      headers: { "content-type": "multipart/form-data" },
    });
  };

  return (
    <section>
      <h2>Créer un pokemon :</h2>

      <form onSubmit={handleCreatePokemon} encType="multipart/form-data">
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

        <div>
          <label>
            Image
            <input type="file" name="image" />
          </label>
        </div>

        <input type="submit" value="Créer le pokemon" />
      </form>
    </section>
  );
};

export default CreatePokemon;
