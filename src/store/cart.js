import { observable, computed, action } from 'mobx';


class Cart {
    @observable products = [{ id: 101, cnt: 2 }]

    @computed get total() {
        return 0; //this.products.reduce((t, pr) => t + pr.price * pr.current, 0)
    }

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            this.products[index].cnt = cnt;
        }
    }

    @action remove(id) {
        let index = this.products.findIndex((pr) => pr.id === id);
        if (index !== -1) {
            this.products.splice(i, 1);
        }

    }


}

let instanse = new Cart();

let productsMap = {};
instanse.products.map(productObject => {
    if (productObject.hasOwnProperty('id')) {
        productsMap[productObject.id] = { title: productObject.title, price: productObject.price };
    }
})



export default instanse;
export { productsMap };


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