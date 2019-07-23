import React, { Component } from 'react';

import BaseItem from "../BaseItem/BaseItem.js";

import './styles.css';

class BaseItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemRecipe: null
        }
    }

    render() {
        return (
            <div className="pageWrapper">
                <ul className="baseItems">
                    {
                        this.props.recipes.map((recipe) => {
                            return (
                                <BaseItem item={recipe.baseItem} recipes={recipe.to} key={recipe.baseItem.id} arrowIcon={this.props.icons.arrow}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BaseItemsPage;