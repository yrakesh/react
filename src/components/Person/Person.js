import React from 'react';

const Person = (props) => {
    return (
        <div onClick={props.clicked}>
            <h3>{ props.name }</h3>
            <h5>Age : { props.age } </h5>
        </div>
    );
}
export default Person;