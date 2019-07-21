import React from 'react';

import {imageByName} from '../../utils/ImageUtils.js';

function ItemImage(props) {
    const image = imageByName(props.name);

    const ImgSize = {
        width: props.size,
        height: props.size
    }

    return (
        <img src={image} alt={props.name} style={ImgSize}></img>
    );
}

export default ItemImage;