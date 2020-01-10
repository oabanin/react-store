import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~/inputs/minmax';

export default class extends React.Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        onSend: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired
    }


    render() {
        let total = 0;
        let totalPrice = this.props.products.reduce((sum, product) => sum + (product.price * product.current), 0);
        let productRows = this.props.products.map((product, i) => {
            total += product.price * product.current;
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><AppMinMax
                        min={1}
                        max={product.rest}
                        cnt={product.current}
                        onChange={(cnt) => { this.props.onChange(i, cnt) }} />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={(e) => this.props.onRemove(i)}>
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
                        <tr><td colSpan="4">Total (Array.reduce) - {totalPrice}</td></tr>
                        <tr><td colSpan="4">Total (Array.map+=) - {total}</td></tr>
                    </tbody>
                </table>
                <hr />
                <button className="btn btn-primary" onClick={this.props.onSend}>FINISH</button>
            </div>
        );


    }
}
