import React from 'react';
import AppMinMax from './hw/5-norm';


export default class extends React.Component {
    state = {
        products: [
            {
                id: 100,
                title: "Iphone 200",
                price: 12222,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: "Samsung AAZ8",
                price: 22222,
                rest: 10,
                current: 1
            }

        ]
    }


    changeCnt(i,cnt){

        //this.state.products[i].current = cnt; does not work because of immutability

        let newProducts = [...this.state.products];
        let newProduct = {...newProducts[i]};
        newProduct.current=cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});

    }


    render() {

        let totalPriceForOneProduct = this.state.products.reduce((sum,product)=> sum + (product.price * product.current), 0);

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
                        </tr>

                        {productRows}
                        <tr><td colSpan="4">{totalPriceForOneProduct}</td></tr>
                    </tbody>
                </table>

            </div>
        );

    }
}