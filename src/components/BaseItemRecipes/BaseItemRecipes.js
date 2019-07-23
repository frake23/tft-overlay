import React from 'react';

import Recipe from '../Recipe/Recipe.js';

import './styles.css';

function BaseItemRecipes(props) {
    const recipes = props.recipes.map((recipe) => {
        return (
            <li className="recipes-item" key={recipe.from.id}>
                <Recipe recipe={recipe} arrowIcon={props.arrowIcon}/>
            </li>
        )
    });

    return (
        <div className="recipes-box">
            <ul className="recipes-list">
                {recipes}
            </ul>
        </div>
    )
}

export default BaseItemRecipes;