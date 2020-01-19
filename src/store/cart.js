import {observable, computed, action} from 'mobx';


class Cart {
    @observable products = getProducts();
    
    @computed get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0)
    }

    @computed get changeOn(){ //return array of 4 functions for React.PureComponent optimization to prevent from unnecessary Re-render
        return this.products.map((product,i)=>{
            return (cnt) => this.change(i,cnt);
        })
    }

    @action change(i, cnt){
        this.products[i].current = cnt;
    }

    @action remove(i){
        this.products.splice(i,1);
    }

    
}

let instanse = new Cart();

let productsMap = {};
 instanse.products.map(productObject => {
     if (productObject.hasOwnProperty('id')) {
        productsMap[productObject.id] = {title: productObject.title,   price:  productObject.price};
     }
 })

 

export default instanse;
export {productsMap};


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