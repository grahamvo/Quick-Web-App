import {
    FETCH_PRODUCTS,
    RECEIVE_PRODUCTS,
    UPDATE_PRODUCTS,
    EDIT_NAME,
    EDIT_DES,
    UPDATE_CART,
} from './constants';

const initialState = {
    data: {},
    isFetching: false,
    name: false,
    des: false,
    cart: 0,
};

function ProductsReducer(
    state = initialState,
    action,
) {
    switch (action.type) {
    case FETCH_PRODUCTS:
        return Object.assign({}, state, {
            isFetching: true,
        });

    case RECEIVE_PRODUCTS:
        return Object.assign({}, state, {
            isFetching: false,
            data: action.products,
        });

    case UPDATE_PRODUCTS:
        return {
            ...state,
            data: action.products,
        };

    case EDIT_NAME:
        return Object.assign({}, state, {
            name: action.param,
        });

    case EDIT_DES:
        return Object.assign({}, state, {
            des: action.param,
        });

    case UPDATE_CART:
        return Object.assign({}, state, {
            cart: action.cart,
        });

    default:
        return state;
    }
}

export default ProductsReducer;
