import React from 'react';
import E404 from '~c/errors/404';
import ProductItem  from '~c/products/item';
import cartModel from '~s/cart.js';
import { Link } from 'react-router-dom';
import { productsMap } from '~s/cart.js';
import productsModel from '~s/products.js';
import { routesMap } from '~/routes';
import { observer, inject } from 'mobx-react';
import Button from 'react-bootstrap/Button'




export default @inject('stores') @observer class extends React.Component {
    render() {
        let id = parseInt(this.props.match.params.id);
        let product = this.props.stores.products.getById(id);
        let cart = this.props.stores.cart;
        let btn;

        console.log(cart.products);
        if (cart.inCart(id)) {
            btn = <Button variant="danger" onClick={() => cart.remove(id)}>Remove from cart</Button>;
        }
        else {
            btn = <Button variant="success" onClick={() => cart.add(id)}>Add to cart</Button>;
        }


        if (product === null) {
            return <E404 />
        }
        else {
            return <ProductItem 
            title={product.title}
            price={product.price}
            backUrl={routesMap.home}
            linkComponent={Link} 
            btnComponent={btn} />
        }
        
    }
}