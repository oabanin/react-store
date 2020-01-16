import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';
import cartModel from '~s/cart.js';

import {observer} from 'mobx-react'


export default @observer class extends React.Component {

   
    render() {
        let productRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><AppMinMax
                        min={1}
                        max={product.rest}
                        cnt={product.current}
                        onChange={cartModel.changeOn[i]} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={(e) => cartModel.remove(i)}>
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
                <button className="btn btn-primary" onClick={this.nextStep}>NExt PAge</button>
            </div>
        );


    }
}
