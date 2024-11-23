// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path as necessary

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      addRecipe({
        id: Date.now(), // Generate unique ID
        title,
        description,
      });

      // Clear input fields
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
