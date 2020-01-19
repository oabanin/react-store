import React from 'react';
import styles from './app.module.css';
import routes from '~/routes';


import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Link} from 'react-router-dom';
import {routesMap} from '~/routes';

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
                    <div className="container">
                       <Link to={routesMap.home}>Home</Link><br/>
                       <Link to={routesMap.cart}>Cart</Link><br/>
                       <Link to={routesMap.order}>Order Now</Link><br/>
                    </div>
                    <div className="container">
                        <Switch>
                            {routesComponents}
                        </Switch>
                    </div>
                </Router>
        );
    }
}
