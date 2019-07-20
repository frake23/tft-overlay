import React, { Component } from 'react';

import ItemImage from "../ItemImage/ItemImage.js"

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
        return (
            <li className="item">
                <ItemImage name={this.props.name}/>
                <div className={`description ${this.state.showDescription ? 'descriptionOpen': 'descriptionClosed'}`}>
                    <h1>

                    </h1>
                    <p className="">
                    </p>
                </div>
            </li>
        )
    }
}

export default Item;