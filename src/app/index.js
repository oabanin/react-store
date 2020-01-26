import React from 'react';
import styles from './app.module.css';

import { observer, Provider } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import routes, { routesMap } from '~/routes';

import stores from '~s';

export default @observer class extends React.Component {


    render() {
        let routesComponents = routes.map(route => {
            return <Route
                path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}></Route>
        });
        this.props
        return (
            <Provider stores={stores}>
                <Router>

                    <div className="container">
                        Number of products in cart: {stores.cart.productsDetailed.length}

                        <hr />





                        <div className="row">
                            <div className="col col-3">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <NavLink exact to={routesMap.home} activeClassName="selected" to={routesMap.home}>Home</NavLink >
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink activeClassName="selected" to={routesMap.cart}>Cart</NavLink >
                                    </li>
                                    <li className="list-group-item">
                                        <NavLink activeClassName="selected" to={routesMap.order}>Order Now</NavLink >
                                    </li>
                                </ul>
                            </div>
                            <div className="col col-9">
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}
