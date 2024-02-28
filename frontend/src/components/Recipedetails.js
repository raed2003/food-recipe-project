import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeDetails = ({ recipe,search }) => {
    console.log(recipe)
    return (
        <div className='diet'>
        <div>
            <Card style={{ width: '30rem', marginBottom: "50px",backgroundColor: "#F8F8FF",opacity:".8" }}>

                <Card.Body>
                    <h2>{recipe.label}</h2>
                    <img src={recipe.image} alt={recipe.label} />
                    <li>{recipe.calories}  Calories</li>
                    <li>{recipe.cuisineType}</li>
                    <li>{recipe.mealType}</li>
                   
                    <h3>Ingredients:</h3>
                    <li> {recipe.ingredientLines}</li>
                    
                    <li>{recipe.totalWeight} gram</li>
                    <a href={`/search/details/${search}`}>
                    <button>Details</button>
                    </a>
                    
                </Card.Body>
            </Card>
           
        </div>  
        </div>  );
};      

            export default RecipeDetails;