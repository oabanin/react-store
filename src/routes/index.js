import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import ProductList from "~p/products/list";
import ProductItem from "~p/products/item";
import Page404 from "~p/error404";


let routes = [
    {
        name: "home",
        url: '/',
        component: ProductList,
        exact: true
    },    
    {
        name: "product",
        url: '/products/:id',
        component: ProductItem,
        exact: true
    },
    {
        name: "cart",
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: "order",
        url: '/checkout',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
   

    {
        url: '**',
        component: Page404
    }
]

let routesMap = {};
routes.forEach(route => {
    if (route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url; //{"home": "/", "cart": "/cart", "order": "/checkout"....}
    }
})

let urlBuilder = function (name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null;
    }
   
    let url = routesMap[name]; //  /products/:id

    for (let key in params) {
        url = url.replace(":" + key, params[key]);
    }

    return url;
}

export default routes;
export { routesMap, urlBuilder };