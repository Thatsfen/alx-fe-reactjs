import React from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
  }));


  React.useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar /> 
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <><li key={recipe.id}>
              {recipe.title}
              <Link to={`/recipe/${recipe.id}`}>
                <RecipeItem recipe={recipe} />
              </Link>
            </li><RecipeItem key={recipe.id} recipe={recipe} /></>
          ))
        ) : (
          <p>No recipes found</p> 
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
