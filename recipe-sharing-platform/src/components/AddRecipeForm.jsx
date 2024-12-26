import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }

    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }

    if (ingredients.trim().split('\n').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    console.log({ title, ingredients, instructions });

 
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <InputField
          label="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
        />

        <InputField
          label="Ingredients"
          id="ingredients"
          type="textarea"
          rows={4}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          error={errors.ingredients}
        />

        <InputField
          label="Instructions"
          id="instructions"
          type="textarea"
          rows={6}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          error={errors.instructions}
        />

        <Button onClick={handleSubmit}>Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipeForm;