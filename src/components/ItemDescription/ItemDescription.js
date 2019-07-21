import React from 'react';

import {itemByName} from '../../utils/DescriptionUtils.js';

import './styles.css'

function ItemDescription(props) {
    const item = itemByName(props.itemName);
    return(
        <div className="descriptionBox">
            <h1 className="itemName">
                {item.fullName}
            </h1>
        </div>
    )
}

export default ItemDescription;