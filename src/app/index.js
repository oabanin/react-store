import React from 'react';
import styles from './app.module.css';
import routes from '~/routes';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class extends React.Component {
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
                <Switch>
                    {routesComponents}
                </Switch>
            </div>
        </Router>
        );
    }
}
