import { observable, computed, action } from 'mobx';
//import productsStore from '~s/products';

class Cart {
    @observable products = []

    constructor(rootStore){
        this.rootStore = rootStore;
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
        this.products.push({ id, cnt: 1 });
    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            console.log(index);
            this.products.splice(index, 1);
        }

    }


}

let productsMap = {};
new Cart().products.map(productObject => {
    if (productObject.hasOwnProperty('id')) {
        productsMap[productObject.id] = { title: productObject.title, price: productObject.price };
    }
})
export { productsMap };


export default Cart;



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