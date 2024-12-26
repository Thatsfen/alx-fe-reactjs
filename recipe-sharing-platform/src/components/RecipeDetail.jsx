import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`./data/${id}.json`); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json();
        setRecipe(data); 
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchData();
  }, [id]); 

  if (error) {
    return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Error Loading Recipe</h1>
      <p className="text-red-500">{error}</p> 
    </div>;
  }

  if (!recipe) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1> 
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded-lg" />

      <div className="bg-gray-100 p-6 rounded-lg shadow-md"> 
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => ( 
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions && recipe.instructions.map((instruction, index) => ( 
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;