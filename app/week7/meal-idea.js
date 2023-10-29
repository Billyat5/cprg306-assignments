"use client";
import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [ingredientsByMeal, setIngredientsByMeal] = useState({});

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  }

  async function fetchIngredientsForMeal(mealId) {
    if (ingredientsByMeal[mealId]) {
      setSelectedMealId(mealId);
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      const mealDetails = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (mealDetails[`strIngredient${i}`] && mealDetails[`strMeasure${i}`]) {
          ingredients.push(`${mealDetails[`strIngredient${i}`]} (${mealDetails[`strMeasure${i}`].trim()})`);
        }
      }
      setIngredientsByMeal(prevState => ({ ...prevState, [mealId]: ingredients }));
      setSelectedMealId(mealId);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      {!ingredient ? (
        <p>Select an item to see meal ideas.</p>
      ) : meals === null || meals.length === 0 ? (
        <div>
          <p>No meal ideas found for {ingredient}</p>
        </div>
      ) : (
        <div>
          <p>Here are some meal ideas using {ingredient}:</p>
          <ul>
            {meals.map(meal => (
              <div key={meal.idMeal}>
                <li 
                  className="mt-2 mb-2 p-2 bg-blue-200 hover:bg-gray-200 font-medium cursor-pointer"
                  onClick={() => fetchIngredientsForMeal(meal.idMeal)}
                >
                  {meal.strMeal}
                </li>
                {selectedMealId === meal.idMeal && ingredientsByMeal[meal.idMeal] && (
                  <div className="ml-4">
                    <p>Ingredients needed:</p>
                    <ul style={{ paddingLeft: '20px' }}>
                      {ingredientsByMeal[meal.idMeal].map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
