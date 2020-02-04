let initialState = {
    products = getProducts()
}


function cart_remove(state, i){
    let products = state.products.filter((el, index) => index !== i);
    return {
        ...state,
        products
    }
}

function cart_change_cnt(state, i, cnt){
    let products = [...state.products];
    products[i] = {...products[i], current: cnt}
    return {
        ...state,
        products
    }
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CART_REMOVE':
            return cart_remove(state, action.i);
            break;
        case 'CART_CHANGE_CNT':         
            return cart_change_cnt(state, action.i, action.cnt)
            break;
    }
    return state;

}

export default reducer;

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