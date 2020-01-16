import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";

let routes = [
    {
        url: '/',
        component: Cart,
        exact: true
    },
    {
        url: '/order',
        component: Order,
        exact: true
    },
    {
        url: '/done',
        component: Result,
        exact: true
    }
]

export default routes;