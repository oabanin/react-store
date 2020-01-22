import React from 'react';
import E404 from '~c/errors/404';
import ProductItem  from '~c/products/item';
import cartModel from '~s/cart.js';
import { Link } from 'react-router-dom';
import { productsMap } from '~s/cart.js';
import productsModel from '~s/products.js';
import { routesMap } from '~/routes';
import { observer, inject } from 'mobx-react';




export default @inject('stores') @observer class extends React.Component {
    render() {
        let id = this.props.match.params.id;
        let product = this.props.stores.products.getById(id);

        if (product === null) {
            return <E404 />
        }
        else {
            return <ProductItem 
            title={product.title}
            price={product.price}
            backUrl={routesMap.home} />
        }
        
    }
}