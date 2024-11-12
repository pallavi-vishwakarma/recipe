import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <a href={`https://www.themealdb.com/meal/${recipe.idMeal}`} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
