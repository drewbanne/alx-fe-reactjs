// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';

// AddRecipeForm component allows users to submit new recipes.
// It accepts an 'onAddRecipe' prop, which is a function to be called
// when a new recipe is successfully submitted.
function AddRecipeForm({ onAddRecipe }) {
  // State to manage input values for the form fields.
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  // State for validation errors.
  const [errors, setErrors] = useState({});

  // Separate function to handle form validation.
  const validate = (title, ingredients, instructions) => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    }
    if (!instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required.';
    }
    return newErrors;
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission.

    setErrors({}); // Clear any previous errors before validation.
    // Removed setSubmissionMessage here as it's not declared in this component.
    // If you had a submission message state in this component, you would clear it here.

    // Call the separate validate function.
    const validationErrors = validate(title, ingredients, instructions);

    // If there are any errors, update state and stop submission.
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors.
    }

    // If validation passes, create a new recipe object.
    const newRecipe = {
      id: Date.now(), // Simple unique ID generation.
      title: title.trim(),
      // For summary, take the first 100 characters of instructions or entire instructions if shorter.
      summary: instructions.trim().substring(0, 100) + (instructions.trim().length > 100 ? '...' : ''),
      image: 'https://placehold.co/300x200/B0E0E6/000?text=New+Recipe', // Generic placeholder image.
      ingredients: ingredients.trim(),
      instructions: instructions.trim(),
    };

    // Call the onAddRecipe function passed from the parent component.
    onAddRecipe(newRecipe);

    // Reset form fields and errors after successful submission.
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Add Your Delicious Recipe ✍️
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-2xl mx-auto space-y-6"
      >
        {/* Recipe Title Input */}
        <div>
          <label htmlFor="title" className="block text-gray-700 text-lg font-semibold mb-2">
            Recipe Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            } transition duration-200`}
            placeholder="e.g., Grandma's Apple Pie"
            aria-describedby="title-error"
          />
          {errors.title && (
            <p id="title-error" className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label htmlFor="ingredients" className="block text-gray-700 text-lg font-semibold mb-2">
            Ingredients: (List each on a new line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="6"
            className={`w-full p-3 border rounded-lg resize-y focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            } transition duration-200`}
            placeholder="e.g., 2 cups flour&#10;1 cup sugar&#10;3 large eggs"
            aria-describedby="ingredients-error"
          ></textarea>
          {errors.ingredients && (
            <p id="ingredients-error" className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions Textarea */}
        <div>
          <label htmlFor="instructions" className="block text-gray-700 text-lg font-semibold mb-2">
            Preparation Steps:
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="10"
            className={`w-full p-3 border rounded-lg resize-y focus:outline-none focus:ring-2 ${
              errors.instructions ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            } transition duration-200`}
            placeholder="e.g., 1. Preheat oven to 350°F.&#10;2. Mix all dry ingredients..."
            aria-describedby="instructions-error"
          ></textarea>
          {errors.instructions && (
            <p id="instructions-error" className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
