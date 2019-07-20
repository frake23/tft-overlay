import React from 'react';

import {imageByName} from '../../utils/ImagesUtils.js';

function ItemImage(props) {
    let image = imageByName(props.name);
    return (
        <img src={image} alt={props.name}></img>
    );
}

export default ItemImage;