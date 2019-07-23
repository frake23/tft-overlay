import React from 'react';

import Item from '../Item/Item.js';

import './styles.css';

function Recipe(props) {
    return (
        <ul className="recipe-list">
            <li className="recipe-item">
                <Item item={props.recipe.from} imgSize="25px"/>
            </li>
            <li className="recipe-item">
                <img src={props.arrowIcon} alt="arrow" className="arrow-image"></img>
            </li>
            <li className="recipe-item">
                <Item item={props.recipe.to} imgSize="25px"/>
            </li>
        </ul>
    )
}

export default Recipe;