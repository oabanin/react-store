import React from 'react';
import cartModel from '~s/cart.js';
import { Link } from 'react-router-dom';
import {productsMap} from '~s/cart.js';

export default  class extends React.Component {


    render() {
        let product = productsMap[this.props.match.params.url];
        
        
        console.log(productsMap[this.props.match.params.url]);
        
       
        return (
            <div>
            <h2>{product.title}</h2>
            Price: {product.price}<br/>
            
            </div>
        );
    }
}