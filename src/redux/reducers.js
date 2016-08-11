import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productsReducer from './Products/reducer';
import productReducer from './Product/reducer';
import PhotoReducer from './Photos/reducer';

export default combineReducers(
    Object.assign(
        {},
        {
            routing: routerReducer,
            products: productsReducer,
            product: productReducer,
            photo: PhotoReducer,
        }
    )
);
