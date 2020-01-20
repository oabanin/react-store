import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react'

import AppMinMax from '~c/inputs/minmax';
import cartModel from '~s/cart.js';

import {Link} from 'react-router-dom';
import {routesMap} from '~/routes';




export default @observer class extends React.Component {
 
    render() {
            let productRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>1</td>
                    <td>2</td>
                    <td><AppMinMax
                        min={1}
                        max={5}
                        cnt={product.cnt}
                        onChange={(cnt)=> cartModel.change(product.id, cnt)} />
                    </td>
                    <td>{1 * product.current}</td>
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
