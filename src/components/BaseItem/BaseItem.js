import React from 'react';

import Item from '../Item/Item.js';
import InvisibleComponent from '../InvisibleComponent/InvisibleComponent.js';
import BaseItemRecipes from '../BaseItemRecipes/BaseItemRecipes.js';

import './styles.css';

function BaseItem(props) {
    console.log(props.item.id)
    return (
        <li className="baseItemBox">
            <Item item={props.item} imgSize="30px" imgOnClick={props.onClick}/>
            <InvisibleComponent show={props.showRecipes} transform="Y">
                <BaseItemRecipes recipes={props.recipes} arrowIcon={props.arrowIcon}/>
            </InvisibleComponent>
        </li>
    )
}

export default BaseItem;