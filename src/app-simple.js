import React from 'react';
//import AppMinMax from './inputs/lazy/lazy';
import AppLazyInput from './inputs/lazy/lazy';


export default class extends React.Component {
    state = {

        inp1: 'start',
        inp2: 'start other'
    }

    update = () => {

    }


    render() {

        return (
            <div><h2>Lazy input</h2>
                {this.state.inp1}<br />
                <AppLazyInput
                    nativeProps={{ type: 'text', className: 'some' }}
                    value={this.state.inp1}
                    onChange={(e) => { this.setState({ inp1: e.target.value }); console.log(this) }} />
                <h2>Lazy input no lazy</h2>
                {this.state.inp2}<br />
                <AppLazyInput
                    nativeProps={{
                        type: 'text',
                        className: 'some',
                        onChange: (e) => {
                            this.setState({ inp2: e.target.value })
                        }
                    }}
                    value={this.state.inp2}
                />
            </div>

        );

    }
}

function getProducts() {
    return [
        {
            id: 100,
            title: "Iphone",
            price: 10000,
            rest: 20,
            current: 1
        },
        {
            id: 101,
            title: "Samsung",
            price: 20000,
            rest: 13,
            current: 1
        },
        {
            id: 102,
            title: "Nokia",
            price: 30000,
            rest: 8,
            current: 1
        },
        {
            id: 103,
            title: "Huawei",
            price: 30000,
            rest: 8,
            current: 1
        }


    ]
}

function showForm(totalPrice, total, productRows, send) {
    return (
        <div>
            <h3>Cart</h3>
            <table border="1">
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
            <button onClick={send}>FINISH</button>
        </div>
    );
}

function showCongrats() {
    return (
        <div>
            Congratulation. Form is finished
        </div>
    )
}