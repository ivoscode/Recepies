import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "af97d0e1";
  const APP_KEY = "91d46c3b05b8c244bddcff3fb25eacf2";

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const RequestURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&`;

  useEffect(() => {
    getRecepie();
  }, [query]);

  const getRecepie = async () => {
    const response = await fetch(RequestURL);
    const data = await response.json();

    setRecepies(data.hits);
    console.log(data);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={event => getSearch(event)} action="">
        <input
          type="text"
          value={search}
          onChange={input => {
            setSearch(input.target.value);
          }}
        />
        <button>Search</button>>
      </form>
      <h1>recepies</h1>
      {recepies.map(recepie => {
        return (
          <Recipe
            key={recepie.recipe.label}
            ingr={recepie.recipe.ingredientLines}
            image={recepie.recipe.image}
            label={recepie.recipe.label}
          />
        );
      })}
    </div>
  );
};

export default App;
