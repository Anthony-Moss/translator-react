import React from 'react';

function toL33t(text) {
    const l33tDictionary = {
        'a': '4',
        'o': '0',
        'e': '3',
        'l': '1',
        'h': '#',
        's': '$',
        't': '7'
    };

    // convert text to array
    const asArray = text.split('');

    // for each letter, translate  to l33t
    const newArray = asArray.map(letter => {
        return l33tDictionary[letter.toLowerCase()] || letter;
    });

    // return the array as a string
    return newArray.join('');
}

function Output(props) {
    console.log('Rendering Output');
    // return (
    //     <div>{
    //         props.transform  === "l33t" ?
    //         toL33t(props.text) : 
    //         props.text.toUpperCase()
    //     }</div>
    // );
    let displayText = props.text.toUpperCase();
    if (props.transform === "l33t") {
        displayText = toL33t(props.text);
    }

    return (
        <div>{displayText}</div>
    );
}

export default Output