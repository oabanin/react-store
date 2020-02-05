import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import reducers from '~/store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(reducers);

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(<Provider store={store}>
    <App name="hello" app={1} />
    </Provider>, document.querySelector("#app"))

