import React from 'react';
import {Link} from 'react-router-dom';

export default function(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
            <div>
                Price: {props.price}<br />
            </div>
            <Link to={props.backUrl}>back to list</Link>
        </div>
    );
}