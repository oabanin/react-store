let initialState = {
    products = getProducts()
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case: 'CART_REMOVE':
            let products = state.products.filter((el, index) => index !== action.i);
            return {
                ...state,
                products
            }
            break;
        case: 'CART_CHANGE_CNY':
            let products = [...state.products];
            products[action.i] = {...products[action.i], current: action.cnt}
            
            return {
                ...state,
                products
            }
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