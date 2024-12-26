import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-item">
      <div>
        <h3>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>
        <p>{recipe.description}</p>
      </div>
      <div>
        {isFavorite ? (
          <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
};

export default RecipeItem;
