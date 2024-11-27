import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) // Case-insensitive filtering
    )
  })),
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
}));
