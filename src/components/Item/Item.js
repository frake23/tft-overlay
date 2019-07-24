import React, { Component } from 'react';

import InvisibleComponent from '../InvisibleComponent/InvisibleComponent.js';
import ItemDescription from '../ItemDescription/ItemDescription.js';

import './styles.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
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

        const item = this.props.item;

        return (
            <div className="item">
                <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} style={ImgSize} onClick={this.props.imgOnClick}>
                    <img alt={item.fullName} src={item.imgSrc} style={ImgSize}></img>
                </div>
                <InvisibleComponent show={this.state.showDescription} transform="X">
                    <ItemDescription fullName={item.fullName} stats={item.stats} description={item.description}/>
                </InvisibleComponent>
            </div>
        )
    }
}

export default Item;
