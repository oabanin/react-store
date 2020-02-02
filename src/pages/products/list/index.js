import React from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { urlBuilder } from '~/routes';
import styles from './index.module.css';

import { observer, inject } from 'mobx-react';

export default @inject('stores') @observer class extends React.Component {

    render() {
        let productStore = this.props.stores.products;
        let cart = this.props.stores.cart;
        let productsCards = productStore.items.map((pr, i) => {
            let btn;


            if (cart.inCart(pr.id)) {
                btn = <Button variant="danger" 
                disabled={pr.id in cart.processId} 
                onClick={() => cart.remove(pr.id)}>Remove from cart</Button>;
            }
            else {
                
                btn = <Button variant="success" 
                disabled={pr.id in cart.processId}
                onClick={() => cart.add(pr.id)}>Add to cart</Button>;
            }

            return <div key={pr.id} className={"col col-4 " + styles.col}>
                <Card>
                    <Card.Body>
                        <Card.Title>{pr.title}</Card.Title>
                        <Card.Text>Price: {pr.price}</Card.Text>
                        <Link to={urlBuilder('product', { id: pr.id })}>Get more ..</Link>
                        <hr />
                        {btn}
                    </Card.Body>
                </Card>
            </div>
        });
        return (
            <div>
                <h1>Products page</h1>
                <div className="row">
                    {productsCards}
                </div>
            </div >
        );
    }
}