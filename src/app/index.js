import React from 'react';
import styles from './app.module.css';

import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import routes, { routesMap } from '~/routes';

export default @observer class extends React.Component {
    render() {
        let routesComponents = routes.map(route => {
            return <Route
                path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}></Route>
        });

        return (
            <Router>
                header
                <div className="container">
                <hr/>
                    <div className="row">
                        <div className="col col-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to={routesMap.home}>Home</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.cart}>Cart</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={routesMap.order}>Order Now</Link>
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
        );
    }
}
