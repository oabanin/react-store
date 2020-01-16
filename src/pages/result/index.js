import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'
import router from '~s/router.js'
import cartModel from '~s/cart.js';
import formDataModel from '~s/order.js';

export default @observer class extends React.Component {
    render() {
       
        return (<div>
            <h2>Congratultaions</h2>
            Hi, {formDataModel.data.name},
            Total: {cartModel.total}
            
        </div >
        );

    }




}
