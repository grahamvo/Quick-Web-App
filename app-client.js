import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './src/redux/createStore';

// Routes
import routes from './src/Routes';

const store = createStore();

const history = syncHistoryWithStore(browserHistory, store);
const app = document.getElementById('app');

ReactDOM.render(
    (
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
    ),
    app
);
