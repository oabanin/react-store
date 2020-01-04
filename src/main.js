import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
//import App from './app-simple.js';

ReactDom.render(<App name="hello" app={1}/>, document.querySelector("#app"))

/*
let hr = React.createElement("hr");
let div = React.createElement("div", {className:"test"}, [hr]);
*/