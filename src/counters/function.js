import React, { useState } from 'react';

export default function (props) {
    let [current, setCurrent] = useState(props.min);
    let increase = () => {
        if (current < props.max) setCurrent(current + 1);
    }
    let decrease = () => {
        if (current > props.min) setCurrent(current - 1);
    }


    let handleChange = (event) => {
        let value = +event.target.value;
        if (value > 0 && value < 11) {
            setCurrent(value);
        }


    }

    return (

        <div>
            <p>Works from {props.min} to {props.max}</p>
            <button onClick={decrease}>Remove One</button>
            <input type="text" value={current} onChange={handleChange} />
            <button onClick={increase}>Add One</button>
        </div>



    );



}