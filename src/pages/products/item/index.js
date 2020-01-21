import React from 'react';
import cartModel from '~s/cart.js';
import { Link } from 'react-router-dom';
import { productsMap } from '~s/cart.js';
import productsModel from '~s/products.js';
import { routesMap } from '~/routes';


export default class extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let product = productsModel.getById(id);

        return (
            <div>
                <h1>{product.title}</h1>
                <hr />
                <div>
                    Price: {product.price}<br />
                </div>
                <Link to={routesMap.home}>back to list</Link>
            </div>
        );
    }
}