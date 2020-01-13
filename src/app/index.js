import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import styles from './app.module.css';
import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";




export default class extends React.Component {
    state = {

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
                onSend={this.moveToOrder} />
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
                <button onClick={()=> this.forceUpdate()}>Force Update</button>
                <hr/>
                {page}
            </div>
        );
    }
}
 