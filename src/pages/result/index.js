import React from 'react';
import PropTypes from 'prop-types';



import formDataModel from '~s/order.js';

export default class extends React.Component {
    render() {
       
        return (<div>
            <h2>Congratultaions</h2>
            Hi, {formDataModel.data.name},
            Total: {cartModel.total}
            
        </div >
        );

    }




}
