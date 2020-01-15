import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'
import router from '~s/router.js'
import cartModel from '~s/cart.js';

export default @observer class extends React.Component {
    render() {
        let productRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.current}</td>
                    <td>{product.price * product.current}</td>
                </tr>
            )
        });

        return (<div>
            <h3>Cart</h3>
            <table className="border table-bordered">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {productRows}

                </tbody>
            </table>
            Total - {cartModel.total}
            < hr />
            <button className="btn btn-warning" onClick={() => router.moveTo('cart')}>Previous page</button>
            <button className="btn btn-primary" onClick={() => router.moveTo('result')}>Next</button>
        </div >
        );

    }




}
