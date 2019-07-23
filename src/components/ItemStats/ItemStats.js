import React from 'react';

import './styles.css';

function ItemStats(props) {
    const stats = props.stats.map((stat) => {
        return (
            <li key={stat.name} className="stat-box">
                <img src={stat.iconSrc} alt={stat.name} className="stat-icon"></img>
                <span>{stat.value}</span>
            </li>
        )
    })

    return (
        <ul className="stats">
            {stats}
        </ul>
    )
}

export default ItemStats