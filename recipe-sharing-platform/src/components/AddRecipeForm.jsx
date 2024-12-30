import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const validationErrors = {};

    if (!values.title.trim()) {
      validationErrors.title = 'Title is required';
    }

    if (!values.ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required';
    } else if (values.ingredients.trim().split('\n').length < 2) {
      validationErrors.ingredients = 'Please enter at least two ingredients';
    }

    if (!values.steps.trim()) {
      validationErrors.steps = 'Steps are required';
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate({ title, ingredients, steps });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
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
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        <InputField
          label="Title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
        />
        <InputField
          label="Ingredients (one per line)"
          id="ingredients"
          type="textarea"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          error={errors.ingredients}
        />
        <InputField
          label="Steps"
          id="steps"
          type="textarea"
          rows="6"
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
