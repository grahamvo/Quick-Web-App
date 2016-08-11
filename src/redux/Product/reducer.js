import {
    FETCH_PRODUCT,
    RECEIVE_PRODUCT,
    UPDATE_NAME,
    UPDATE_DES,
    EDIT_NAME,
    EDIT_DES,
} from './constants';

const initialState = {
    product: {},
    isFetching: false,
    editName: false,
    editDes: false,
};

function ProductReducer(
    state = initialState,
    action,
) {
    switch (action.type) {
    case FETCH_PRODUCT:
        return Object.assign({}, state, {
            isFetching: true,
        });

    case RECEIVE_PRODUCT:
        return Object.assign({}, state, {
            isFetching: false,
            data: action.product,
        });

    case UPDATE_NAME:
        return {
            ...state,
            data: {
                ...state.data,
                name: action.name,
            },
        };

    case UPDATE_DES:
        return {
            ...state,
            data: {
                ...state.data,
                description: action.des,
            },
        };

    case EDIT_NAME:
        return Object.assign({}, state, {
            editName: action.param,
        });

    case EDIT_DES:
        return Object.assign({}, state, {
            editDes: action.param,
        });

    default:
        return state;
    }
}

export default ProductReducer;
