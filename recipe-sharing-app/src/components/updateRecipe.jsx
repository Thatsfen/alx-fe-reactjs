import { useRecipeStore } from './recipeStore';

const handleUpdate = (id, updatedData) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  updateRecipe(id, updatedData);
};

const handleDelete = (id) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  deleteRecipe(id);
};
