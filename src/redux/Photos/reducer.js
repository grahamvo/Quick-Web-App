import {
    FETCH_PHOTO,
    RECEIVE_PHOTO,
} from './constants';

const initialState = {
    photo: '',
    isFetching: false,
};

function PhotoReducer(
    state = initialState,
    action,
) {
    switch (action.type) {
    case FETCH_PHOTO:
        return Object.assign({}, state, {
            isFetching: true,
        });

    case RECEIVE_PHOTO:
        return Object.assign({}, state, {
            isFetching: false,
            photo: action.photo,
        });
    default:
        return state;
    }
}

export default PhotoReducer;
