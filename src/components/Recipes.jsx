import { useState } from 'react';

const pie = {
  apples: 5,
  cinnammon: '1 tsp',
  sugar: '1 cup',
  butter: '1 cup'
};

const cookies = {
  chips: '1 cup',
  flour: '2 cups',
  eggs: 2
}

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(pie)}>Pie</button>
      <button onClick={() => setRecipe(cookies)}>Cookie</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>{material}: {recipe[material]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;