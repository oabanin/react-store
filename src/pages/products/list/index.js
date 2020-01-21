import React from 'react';
import cartModel from '~s/cart.js';
import { Link } from 'react-router-dom';
import productsModel from '~s/products.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { urlBuilder } from '~/routes';

export default class extends React.Component {
    render() {
        console.log(productsModel);
        let productsCards = productsModel.items.map((pr, i) => {
            return <div key={i}>
                <Card>
                    <Card.Body>
                        <Card.Title>{pr.title}</Card.Title>
                        <Card.Text>Price: {pr.price}</Card.Text>
                        <Link to={urlBuilder('product', {id: pr.id})}>Get more ..</Link>
                    </Card.Body>
                </Card>
            </div>
        });
        return (
            <div>
                {productsCards}
            </div>
        );
    }
}