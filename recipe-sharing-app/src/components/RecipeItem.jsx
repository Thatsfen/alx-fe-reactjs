import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      {/* Add more details about the recipe as needed */}
    </div>
  );
};

export default RecipeItem;
