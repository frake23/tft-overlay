import React from 'react';

function InvisibleComponent(props) {
    const styles = {
        open: {
            opacity: "1",
            visibility: "visible",
            transform: `translate${props.transform}(0)`,
            transition: "opacity .15s, transform .15s, visibility .15s"
        },
        closed: {
            opacity: "0",
            pointerEvents: "none",
            visibility: "hidden",
            transform: `translate${props.transform}(-10px)`
        }
    }
    
    return (
        <div style={props.show ? styles.open: styles.closed}>
            {props.children}
        </div>
    )
}

export default InvisibleComponent;
