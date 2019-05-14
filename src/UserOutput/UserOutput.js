 import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.deleteHandler}>Some random text</p>
            <p>{props.userName}</p>
        </div>
    );
}

export default userOutput;