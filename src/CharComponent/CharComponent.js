import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #000'
    }
    return (
        <span style={style} onClick={props.clickHandler}>{props.char}</span>
    );
}

export default charComponent;