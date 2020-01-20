import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import cartModel from '~s/cart.js';
import formDataModel from '~s/order.js';

import { Link } from 'react-router-dom';
import { urlBuilder } from '~/routes';

export default @observer class extends React.Component {
    render() {
        let postsTmp = [1, 2, 3];
        let links = postsTmp.map((post, index) => {
            return <div key={index}>
                <Link to={urlBuilder('blogPost', { url: post })}>Post {post}</Link>
            </div>
        })

        return (<div>
            <h2>Congratultaions</h2>
            Hi, {formDataModel.data.name},
            Total: {cartModel.total}
            {links}
        </div >
        );

    }




}
