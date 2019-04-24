import React from "react";

const Recipe = ({ label, image, ingr }) => {
  return (
    <div>
      <h1>{label}</h1>
      <img src={image} alt="" />
      <ul>
        {ingr.map(ingr => {
          return <li>{ingr}</li>;
        })}
      </ul>
    </div>
  );
};
export default Recipe;
