import React from 'react';
import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";


class Router {

    routs = {
        cart: () => <Cart />, //If it's not a function, Component is created when new instance of class is created
        order: () => <Order />, //Component is created only after calling of function
        result: () => <Result />
    }

    activeRoute = 'cart';

    get component() {
        return this.routs[this.activeRoute]();
    }

    moveTo(route) {
        this.activeRoute = route;
    }
}

export default new Router();