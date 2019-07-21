import React from 'react';
import './styles.css';

function InvisibleComponent(props) {
    return (
        <div className={props.show ? 'open': 'closed'}>
            {props.children}
        </div>
    )
}

export default InvisibleComponent;
