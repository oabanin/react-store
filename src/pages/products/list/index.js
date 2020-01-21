import React from 'react';
import cart from '~s/cart.js';
import { Link } from 'react-router-dom';
import productsModel from '~s/products.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { urlBuilder } from '~/routes';
import styles from './index.module.css';

export default class extends React.Component {

    render() {

        let productsCards = productsModel.items.map((pr, i) => {
            let btn;

            if (cart.inCart(pr.id)) {

            }
            else {
                btn = <Button variant="success" onClick={() => cart.add(pr.id)}>Add to cart</Button>;
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