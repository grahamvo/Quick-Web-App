import axios from 'axios';
import {
    FETCH_PRODUCT,
    RECEIVE_PRODUCT,
    UPDATE_DES,
    UPDATE_NAME,
    EDIT_NAME,
    EDIT_DES,
    SAVE_PRODUCT,
} from './constants';

function getProduct() {
    return {
        type: FETCH_PRODUCT,
    };
}

function receiveProduct(product) {
    return {
        type: RECEIVE_PRODUCT,
        product,
    };
}

function saveProd() {
    return {
        type: SAVE_PRODUCT,
    };
}

const actions = {
    fetchProduct: (id) => {
        return (dispatch) => {
            dispatch(getProduct());
            return axios.get(`http://134.213.113.137:9000/v1/products/${id}`)
                .then(res => {
                    dispatch(receiveProduct(res.data));
                });
        };
    },

    saveProduct: (product) => {
        return (dispatch) => {
            return axios.put(`http://134.213.113.137:9000/v1/products/${product.id}`,
                product,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            ).then(res => {
                dispatch(saveProd());
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

    updateName: (name) => {
        return {
            type: UPDATE_NAME,
            name,
        };
    },

    updateDes: (des) => {
        return {
            type: UPDATE_DES,
            des,
        };
    },
};

export default actions;
