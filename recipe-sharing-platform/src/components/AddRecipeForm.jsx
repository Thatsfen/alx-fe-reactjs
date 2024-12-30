import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
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

    if (!steps.trim()) {
      newErrors.steps = 'Steps are required';
    }

    if (ingredients.trim().split('\n').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log the recipe details
    console.log({ title, ingredients, steps });

    // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
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
          label="Steps"
          id="steps"
          type="textarea"
          rows={6}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          error={errors.steps}
        />

        <Button onClick={handleSubmit}>Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
