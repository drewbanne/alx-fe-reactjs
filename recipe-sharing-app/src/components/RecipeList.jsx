// src/components/RecipeList.jsx

// Import the useRecipeStore hook to access the recipes state.
import useRecipeStore from '../recipeStore'; // Note: path is relative to src/components

// RecipeList component displays the list of recipes from the Zustand store.
const RecipeList = () => {
  // Select the 'recipes' array from the store's state.
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '20px' }}>
        Available Recipes
      </h2>
      {recipes.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No recipes added yet. Add some!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {recipes.map((recipe) => (
            <div key={recipe.id} style={{
              border: '1px solid #c8e6c9',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#e8f5e9',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#388e3c', marginBottom: '10px', fontSize: '1.4em' }}>{recipe.title}</h3>
              <p style={{ color: '#555', fontSize: '0.95em', lineHeight: '1.5' }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
