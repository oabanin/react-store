import {observable, computed, action} from 'mobx';

class Products {
    @observable items = getProducts();

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
            rest: 20
        },
        {
            id: 101,
            title: "Samsung",
            price: 10,
            rest: 13
        },
        {
            id: 102,
            title: "Nokia",
            price: 100,
            rest: 8
        },
        {
            id: 103,
            title: "Huawei",
            price: 1000,
            rest: 8
        }


    ]
}