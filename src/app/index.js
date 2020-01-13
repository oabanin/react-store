import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import styles from './app.module.css';
import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";




export default class extends React.Component {
    state = {
        products: getProducts(),
        formData: {
            name: {
                label: "Your name",
                value: ""
            },
            email: {
                label: "Email",
                value: ""
            },
            label: {
                label: "Phone",
                value: ""
            }
        },
        activeRoute: 'CART'
    }


    moveToCart = () => {
        this.setState({ activeRoute: 'CART' });
    }

    moveToOrder = () => {
        this.setState({ activeRoute: 'ORDER' });
    }
name
    moveToResult = () => {
        this.setState({ activeRoute: 'RESULT' });
    }

    changeCnt = (i, cnt) => {

        //this.state.products[i].current = cnt; does not work because of immutability

        let products = [...this.state.products];
        products[i] = { ...products[i], current: cnt };
        this.setState({ products: products });

    }

    remove = (i) => {
        let products = [...this.state.products];
        products.splice(i, 1);
        this.setState({ products });
        console.log(i);
    }
    
    changeformData = (label, value) => {
            let formData = {...this.state.formData};
            formData[label] = {...formData[label], value};
            this.setState({formData})


        

    }

    render() {
        let page;

        switch (this.state.activeRoute) {
           case 'CART':
                page = <Cart 
                products={this.state.products}
                onSend={this.moveToOrder}
                onChange={this.changeCnt}
                onRemove={this.remove} />
                break;
            case 'ORDER':
                page = <Order 
                formData={this.state.formData}
                onSend={this.moveToResult}
                onChange={this.changeformData}
                onBack={this.moveToCart} />
                break;
            case 'RESULT':
                page = <Result />
                break;
            default:
                page = <div>404</div>
        }
        return (
            <div className="container">
                {page}
            </div>
        );
    }
}

function getProducts() {
    return [
        {
            id: 100,
            title: "Iphone",
            price: 1,
            rest: 20,
            current: 1
        },
        {
            id: 101,
            title: "Samsung",
            price: 10,
            rest: 13,
            current: 1
        },
        {
            id: 102,
            title: "Nokia",
            price: 100,
            rest: 8,
            current: 1
        },
        {
            id: 103,
            title: "Huawei",
            price: 1000,
            rest: 8,
            current: 1
        }


    ]
}