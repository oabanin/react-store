import Cart from "~p/cart";
import Order from "~p/order";
import Result from "~p/result";
import Page404 from "~p/error404";
import Post from "~p/post";

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
        name: 'blogPost',
        url:'/news/:url',
        component: Post,
        exact: true
    },
    {
        url:'**',
        component:Page404
    }
]

let routesMap = {};
routes.forEach(route=> {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }   
})


export default routes;
export {routesMap};