import axios from 'axios';
import {
    FETCH_PRODUCTS,
    RECEIVE_PRODUCTS,
    UPDATE_PRODUCTS,
    EDIT_NAME,
    EDIT_DES,
    UPDATE_CART,
} from './constants';

function getProducts() {
    return {
        type: FETCH_PRODUCTS,
    };
}

function receiveProducts(products) {
    return {
        type: RECEIVE_PRODUCTS,
        products,
    };
}

function update(products) {
    return {
        type: UPDATE_PRODUCTS,
        products,
    };
}

const actions = {
    fetchProducts: () => {
        return (dispatch) => {
            dispatch(getProducts());
            return axios.get('http://134.213.113.137:9000/v1/products')
                .then(res => {
                    dispatch(receiveProducts(res));
                });
        };
    },

    editName: (param) => {
        return {
            type: EDIT_NAME,
            param,
        };
    },

    editDes: (param) => {
        return {
            type: EDIT_DES,
            param,
        };
    },

    updateCart: (cart) => {
        return {
            type: UPDATE_CART,
            cart,
        };
    },
};

export default actions;
