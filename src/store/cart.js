import {observable, computed, action} from 'mobx';


class Cart {
    @observable products = getProducts();
    @computed get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0)
    }

    @action change(i, cnt){
        this.products[i].current = cnt;
    }

    @action remove(i){
        this.products.splice(i,1);
    }
}

export default new Cart();


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