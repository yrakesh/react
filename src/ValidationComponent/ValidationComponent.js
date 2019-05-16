import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            {
              props.inputLength < 5 ? 
              <span>Text too short</span> : <span>Text long enough</span>
            }
        </div>
    );
}

export default validationComponent;