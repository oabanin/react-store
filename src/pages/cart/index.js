import React from 'react';
import { observer, inject } from 'mobx-react'

import AppMinMax from '~c/inputs/minmax';

import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';


@inject('stores') @observer class Cart extends React.Component {

    render() {
        let cartModel = this.props.stores.cart;
        let productRows = cartModel.productsDetailed.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><AppMinMax
                        min={1}
                        max={product.rest}
                        cnt={product.cnt}
                        onChange={(cnt) => cartModel.change(product.id, cnt)} />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button onClick={(e) => cartModel.remove(product.id)}>
                            X
                        </button>
                    </td>

                </tr>
            )
        });



        return (

            <div>
                <h3>Cart</h3>
                <table className="border table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productRows}

                    </tbody>
                </table>
                Total - {cartModel.total}
                <hr />
                <button className="btn btn-primary">NExt PAge</button>
                <Link className="btn btn-primary" to={routesMap.order}>Send</Link>
            </div>
        );


    }
}


export default Cart;