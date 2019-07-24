import React, { Component } from 'react';

import BaseItem from "../BaseItem/BaseItem.js";

import './styles.css';

class BaseItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItemRecipesIndex: null
        }
    }

    handleBaseItemOnClick(index) {
        index !== this.state.showItemRecipesIndex ? this.setState({
            showItemRecipesIndex: index
        }):  this.setState({
            showItemRecipesIndex: null
        })
    }

    render() {
        return (
            <div className="pageWrapper">
                <ul className="baseItems">
                    {
                        this.props.recipes.map((recipe, index) => {
                            return (
                                <BaseItem
                                    item={recipe.baseItem}
                                    recipes={recipe.to}
                                    key={recipe.baseItem.id}
                                    arrowIcon={this.props.icons.arrow}
                                    showRecipes={index === this.state.showItemRecipesIndex}
                                    onClick={() => this.handleBaseItemOnClick(index)}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BaseItemsPage;