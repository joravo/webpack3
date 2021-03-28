import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrip: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGounteltsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

console.log(elvenShieldRecipe);
console.log(elvenGounteltsRecipe);

const Recipies = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGounteltsRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipies;