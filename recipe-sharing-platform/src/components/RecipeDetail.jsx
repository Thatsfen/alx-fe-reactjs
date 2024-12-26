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

};

export default RecipeDetail;