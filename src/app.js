import React from 'react';
import AppMinMax from './hw/5-norm';
//import DeleteButton from'./6-deleteButton'

export default class extends React.Component {
    state = {
        products: getProducts()
    }


    changeCnt(i,cnt){

        //this.state.products[i].current = cnt; does not work because of immutability

        let products = [...this.state.products];
        products[i] = {...products[i], current : cnt};
        this.setState({products: products});

    }


    render() {

        let totalPrice = this.state.products.reduce((sum,product)=> sum + (product.price * product.current), 0);

        let productRows = this.state.products.map((product, i) => {
            // this.setState({total: this.state.total + product.price * product.current});
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><AppMinMax
                        min={1}
                        max={product.rest}
                        cnt={product.current}
                        onChange={(cnt)=> this.changeCnt(i,cnt)}/>
                    </td>
                    <td>{product.price * product.current}</td>
                    <td></td>
                   
                </tr>
            )
        });


        return (
            <div>
                <h3>Cart</h3>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Delete</td>
                        </tr>

                        {productRows}
                        <tr><td colSpan="4">{totalPrice}</td></tr>
                    </tbody>
                </table>

            </div>
        );

    }
}

function getProducts(){
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