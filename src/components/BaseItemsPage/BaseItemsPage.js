import React, { Component } from 'react';
import Item from "../Item/Item";

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
                        this.props.items.map((item) => {
                            return (
                                <li className="itemBox">
                                    <Item item={item} imgSize="30px"/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default BaseItemsPage;