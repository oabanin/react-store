import React from 'react';
import PropTypes from 'prop-types';

import AppMinMax from '~c/inputs/minmax';


import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import actions from '~s/actions';
import { connect } from 'react-redux';


class Cart extends React.Component {

    render() {

        let total = this.props.products.reduce((total, product) => total + product.price * product.current, 0);

        let productRows = this.props.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><AppMinMax
                        min={1}
                        max={product.rest}
                        cnt={product.current}
                        onChangeFromCart={(cnt) => this.props.onChange(i, cnt)} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.props.onRemove(i)}>
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
                Total - {total}
                <hr />
                <button className="btn btn-primary">NExt PAge</button>
                <Link className="btn btn-primary" to={routesMap.order}>Send</Link>
            </div>
        );


    }
}

let mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (i) => dispatch(actions.cart.remove(i)),
        onChange: (i,cnt) => dispatch(actions.cart.changeCnt(i,cnt))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);