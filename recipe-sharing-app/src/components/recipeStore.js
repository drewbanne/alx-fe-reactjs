// src/components/recipeStore.js

// Import the 'create' function from zustand to define our store.
import { create } from 'zustand';

// Define the Zustand store for managing recipes, search term, and filtered results.
const useRecipeStore = create((set, get) => ({ // 'get' is added here to access current state within actions
  // 'recipes' is the main state variable for all recipes.
  recipes: [],

  // 'searchTerm' state to hold the current search input.
  searchTerm: '',

  // 'filteredRecipes' state to hold recipes that match the search term.
  filteredRecipes: [],

  // Action to add a new recipe.
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
    get().filterRecipes(); // Re-filter recipes after adding a new one.
  },

  // Action to delete a recipe by its ID.
  deleteRecipe: (idToDelete) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== idToDelete),
    }));
    get().filterRecipes(); // Re-filter recipes after deleting one.
  },

  // Action to update an existing recipe.
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
    get().filterRecipes(); // Re-filter recipes after updating one.
  },

  // Action to set the entire recipes array (e.g., for initial load).
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Filter immediately after setting recipes.
  },

  // Action to update the search term.
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Re-filter recipes immediately when search term changes.
  },

  // Action to filter recipes based on the current search term.
  filterRecipes: () => {
    const state = get(); // Get the current state.
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) // Also search in description
    );
    set({ filteredRecipes: filtered });
  },
}));

// Export the custom hook.
export default useRecipeStore;
