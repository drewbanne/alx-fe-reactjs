// src/components/recipeStore.js

// Import the 'create' function from zustand.
import { create } from 'zustand';

// Define the Zustand store for managing recipes, search term, filtered results, favorites, and recommendations.
const useRecipeStore = create((set, get) => ({
  // Main state for all recipes.
  recipes: [],

  // State to hold the current search input.
  searchTerm: '',

  // State to hold recipes that match the search term.
  filteredRecipes: [],

  // New: 'favorites' array to store IDs of favorited recipes.
  favorites: [],

  // New: 'recommendations' array to store recommended recipes.
  recommendations: [],

  // Action to add a new recipe.
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
    get().filterRecipes(); // Re-filter recipes after adding.
    get().generateRecommendations(); // Re-generate recommendations.
  },

  // Action to delete a recipe by its ID.
  deleteRecipe: (idToDelete) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== idToDelete),
      // Also remove from favorites if deleted
      favorites: state.favorites.filter((id) => id !== idToDelete),
    }));
    get().filterRecipes(); // Re-filter recipes after deleting.
    get().generateRecommendations(); // Re-generate recommendations.
  },

  // Action to update an existing recipe.
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
    get().filterRecipes(); // Re-filter recipes after updating.
    get().generateRecommendations(); // Re-generate recommendations.
  },

  // Action to set the entire recipes array.
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Filter immediately after setting recipes.
    get().generateRecommendations(); // Generate recommendations.
  },

  // Action to update the search term.
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Re-filter recipes immediately when search term changes.
  },

  // Action to filter recipes based on the current search term.
  filterRecipes: () => {
    const state = get();
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    set({ filteredRecipes: filtered });
  },

  // New: Action to add a recipe to favorites.
  addFavorite: (recipeId) => {
    set((state) => {
      // Only add if not already in favorites.
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return {}; // No change if already exists.
    });
    get().generateRecommendations(); // Re-generate recommendations after favorite change.
  },

  // New: Action to remove a recipe from favorites.
  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations(); // Re-generate recommendations after favorite change.
  },

  // New: Action to generate mock recommendations based on favorites.
  generateRecommendations: () => {
    const state = get();
    // For a simple mock, let's recommend recipes that are NOT favorites
    // but have similar keywords to favorite recipes, or just random ones.
    // Here, we'll just pick a few random ones that are not favorites.
    const nonFavoriteRecipes = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id)
    );

    const shuffled = [...nonFavoriteRecipes].sort(() => 0.5 - Math.random());
    // Limit to top 3 recommendations for simplicity
    const recommended = shuffled.slice(0, 3);

    set({ recommendations: recommended });
  },
}));

// Export the custom hook.
export default useRecipeStore;
