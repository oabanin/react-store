import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(<App name="hello" app={1}/>, document.querySelector("#app"))

