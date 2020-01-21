import {observable, computed, action} from 'mobx';


class Products {
    @observable items = getProducts();

    @computed get productsMap(){
        let map = {};

        this.items.forEach((pr, i)=> {
            map[pr.id.toString()]=i;
        })

        return map;
        //{'100':0, '101':1.....}

    }

    getById(id){
        let index = this.productsMap[id];

        if (index === undefined){
            return null;
        }

        return this.items[index];
    }
}

let instanse = new Products();

export default instanse;



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