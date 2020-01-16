import React from 'react';
import styles from './app.module.css';
import routes from '~/routes';


import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default @observer class extends React.Component {
    render() {
        let routesComponents = routes.map(route => {
            return <Route
                path={route.url}
                component={route.component}
                exact={route.exact}
                key={route.url}></Route>
        });

        return (<Router>
            <div className="container">
                {routesComponents}
            </div>
        </Router>
        );
    }
}
