

import cartStore from "./cart";
import productsStore from "./products";
import orderStore from "./order";


import * as cartApi from '~/api/cart';
import * as products from '~/api/products';

class RootStore{
    constructor(){
        this.apiApp = {
            products, cartApi
        }

        this.storage = localStorage;
        
        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
    }
}

export default new RootStore();