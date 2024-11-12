import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './App.css';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch recipes based on ingredient
  const fetchRecipes = async () => {
    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setError('No recipes found for the ingredient.');
      }
    } catch (err) {
      setError('There was an error fetching the data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Ideas</h1>
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={fetchRecipes}>Find Recipes</button>

      {loading && <p>Loading...</p>}
      {error && <Error message={error} />}
      
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
