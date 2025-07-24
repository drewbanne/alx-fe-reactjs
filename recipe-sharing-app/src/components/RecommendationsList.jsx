// src/components/RecommendationsList.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; // Import the store

// RecommendationsList component displays personalized recipe recommendations.
const RecommendationsList = () => {
  // Get recommendations and the action to generate them from the store.
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  // Also get recipes and favorites to trigger re-generation when they change.
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);


  // Generate recommendations whenever recipes or favorites change.
  useEffect(() => {
    generateRecommendations();
  }, [recipes, favorites, generateRecommendations]);


  return (
    <div style={{
      marginTop: '40px',
      padding: '20px',
      border: '1px solid #c5cae9', // Light purple border
      borderRadius: '8px',
      backgroundColor: '#e8eaf6', // Light purple background
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ color: '#3f51b5', borderBottom: '2px solid #5c6bc0', paddingBottom: '10px', marginBottom: '20px' }}>
        ✨ Recommended Recipes
      </h2>
      {recommendations.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No recommendations available yet. Add more recipes and favorites!</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {recommendations.map((recipe) => (
            <div key={recipe.id} style={{
              border: '1px solid #9fa8da',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#c5cae9',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#303f9f', marginBottom: '10px', fontSize: '1.4em' }}>{recipe.title}</h3>
              <p style={{ color: '#555', fontSize: '0.95em', lineHeight: '1.5' }}>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 15px',
                backgroundColor: '#3f51b5', // Purple for details
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '0.9em',
                transition: 'background-color 0.3s ease'
              }}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
