import React, { Component } from 'react';

import ItemImage from '../ItemImage/ItemImage.js';
import InvisibleComponent from '../InvisibleComponent/InvisibleComponent.js';
import ItemDescription from '../ItemDescription/ItemDescription.js'

import "./styles.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false
        }
    }

    handleOnMouseEnter() {
        this.setState({
            showDescription: true
        })
    }

    handleOnMouseLeave() {
        this.setState({
            showDescription: false
        })
    }

    render() {
        const ImgSize = {
            width: this.props.imgSize,
            height: this.props.imgSize
        }

        return (
            <li className="item">
                <div onMouseEnter={() => this.handleOnMouseEnter()} onMouseLeave={() => this.handleOnMouseLeave()} style={ImgSize} class="imgContainer">
                    <ItemImage name={this.props.name} size={this.props.imgSize}/>
                </div>
                <InvisibleComponent show={this.state.showDescription}>
                    <ItemDescription itemName={this.props.name}/>
                </InvisibleComponent>
            </li>
        )
    }
}

export default Item;
