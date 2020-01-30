import { observable, computed, action } from 'mobx';
//import productsStore from '~s/products';

class Cart {
    @observable products = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.apiApp.cartApi;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');

    }


    @computed get inCart() {
        return (id) => this.products.some((product) => product.id === id)
    }

    @computed get cartCnt() {
        return this.products.length;
    }



    @computed get productsDetailed() {
        return this.products.map(pr => {
            let product = this.rootStore.products.getById(pr.id);
            return { ...product, cnt: pr.cnt }
        })
    }


    @computed get total() {
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt
        }, 0);
    }


    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            this.products[index].cnt = cnt;
        }
    }

    @action add(id) {
        this.api.add(this.token, id).then(res => {
            if (res) {
                this.products.push({ id, cnt: 1 });
            }

        });

    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            console.log(index);
            this.products.splice(index, 1);
        }

    }

    @action load() {
        this.api.load(this.token).then(data => {
            this.products = data.cart;

            if (data.needUpdate === true) {
                this.token = data.token;
                this.storage.setItem('cartToken', this.token);
            }
        });
    }


}

export default Cart;


