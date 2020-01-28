import React from 'react';
import Button from 'react-bootstrap/Button';
//Передача {link} из react-router-dom єто перебор 


export default function(props){
    let btn;
    if (props.inCart) {
        btn = <Button variant="danger" onClick={props.onRemove}>Remove from cart</Button>;
    }
    else {
        btn = <Button variant="success" onClick={props.onAdd}>Add to cart</Button>;
    }


    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
            <div>
                Price: {props.price}<br />
            </div>
            <props.linkComponent to={props.backUrl}>back to list</props.linkComponent>
            <p>Text about product</p>
            <p>Component derived :  {props.btnComponent}</p>
            <p>built-in component: {btn} </p>
        </div>
    );
}