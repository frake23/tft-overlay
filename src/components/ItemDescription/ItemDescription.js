import React from 'react';

import ItemStats from '../ItemStats/ItemStats.js';

import './styles.css'

function ItemDescription(props) {
    return(
        <div className="descriptionBox">
            <h1 className="itemName">
                {props.fullName}
            </h1>
            {props.stats && <ItemStats stats={props.stats}></ItemStats>}
            {props.description && <p className="description">{props.description}</p>}
        </div>
    )
}

export default ItemDescription;