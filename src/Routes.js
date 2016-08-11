import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './js/App';
import Products from './js/products/Products';
import Product from './js/products/Product';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Products } />
        <Route path="products/:id" component={ Product }/>
    </Route>
);
