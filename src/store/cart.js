import { observable, computed, action, runInAction } from 'mobx';

//import productsStore from '~s/products';

class Cart {
    @observable products = [];
    @observable processId = {};

    @computed get inProcess() {

        // return (id) => {             //WORKS
        //     console.log(this.processId);
        //     console.log(Object.keys(this.processId));
        //     return this.processId.hasOwnProperty(id);
        // } 
        return (id) => id in this.processId;        //WORKS
        //return (id) => this.processId.hasOwnProperty(id); //DOES NOT WORK
    }

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
        if (!(id in this.processId)) {
            let index = this.products.findIndex((pr) => pr.id === id);
            if (index !== -1) {
                this.processId[id] = true;
                this.api.change(this.token, id, cnt).then(res => {
                    this.products[index].cnt = cnt;
                    delete this.processId[id];
                });
            }
        }
    }

    @action add(id) {
        if (!(this.inCart(id) || id in this.processId)) {
            this.processId[id] = true;
            this.api.add(this.token, id).then(res => {
                runInAction(() => {

                    if (res) {
                        this.products.push({ id, cnt: 1 });

                    }
                });
            }).catch(() => {
                this.rootStore.notifications.add(`Can't add item`);
            }).finally(runInAction(()=>{
                delete this.processId[id];
            }));
                
                
                
        }
    }

    @action remove(id) {
        if (this.inCart(id) && !(id in this.processId)) {
            let index = this.products.findIndex((pr) => pr.id === id);
            if (index !== -1) {
                this.processId[id] = true;
                this.api.remove(this.token, id).then(res => {
                    runInAction(() => {
                        this.products.splice(index, 1);
                        delete this.processId[id];
                    });
                });
            }
        }
    }

    @action load() {
        this.api.load(this.token).then(data => {
            runInAction(() => {
                this.products = data.cart;
                if (data.needUpdate === true) {
                    this.token = data.token;
                    this.storage.setItem('cartToken', this.token);
                }
            })
        }).catch(() => {
            //Error
        })
    }


    @action clean() {
        return new Promise((resolve, reject) => {
            this.api.clean(this.token).then(res => {
                if (res) {
                    this.products = [];
                    resolve(true);
                }
                else {
                    reject();
                }

            });
        });


    }


}

export default Cart;


