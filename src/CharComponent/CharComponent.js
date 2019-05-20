import React from 'react';
import Radium from 'radium';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #000',
        ':hover': {
            border: '3px solid green',
        }
    }
    return (
        <span style={style} onClick={props.clickHandler}>{props.char}</span>
    );
}

export default Radium(charComponent);