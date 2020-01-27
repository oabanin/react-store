import React from 'react';
//Передача {link} из react-router-dom єто перебор 


export default function(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
            <div>
                Price: {props.price}<br />
            </div>
            <props.linkComponent to={props.backUrl}>back to list</props.linkComponent>
            {props.btnComponent}
        </div>
    );
}