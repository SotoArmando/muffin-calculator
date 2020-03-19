/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import Calculate from './Logic/calculate';

ReactDOM.render(<App total="0" next="" operation="" calculator={new Calculate()} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
