import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import AppMinMax from '~c/inputs/minmax';
import cartModel from '~s/cart.js';

import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';





export default @observer class extends React.Component {

    render() {
        let productRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><Link to={'/post/' + product.id}>Get more..</Link></td>
                </tr>
            )
        });



        return (

            <div>
                <h2>HOME</h2>
                <hr />

                <table className="border">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productRows}
                    </tbody>
                </table>

            </div>
        );


    }
}
