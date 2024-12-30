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
    } else if (ingredients.trim().split('\n').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients';
    }

    if (!steps.trim()) {
      newErrors.steps = 'Steps are required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ title, ingredients, steps });

    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <InputField
          label="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
        />

        <InputField
          label="Ingredients (one per line)"
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

        <Button className="w-full">Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
