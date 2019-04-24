import React from 'react';

function Output(props) {
    console.log('Rendering Output');
    return (
        <div>{props.text.toUpperCase()}</div>
    );
}

export default Output