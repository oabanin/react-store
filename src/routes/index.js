import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import Page404 from "~p/error404";

let routes = [
    {
        name: "home",
        url: '/',
        component: Cart,
        exact: true
    },
    {
        name:"order",
        url: '/checkout',
        component: Order,
        exact: true
    },
    {
        name:'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        url:'**',
        component:Page404
    }
]

let routesMap = {};
routes.forEach(route=> {
    routesMap[route.name] = route.url;
})


export default routes;
export {routesMap};