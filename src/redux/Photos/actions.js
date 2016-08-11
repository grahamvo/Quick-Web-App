import axios from 'axios';
import {
    FETCH_PHOTO,
    RECEIVE_PHOTO,
} from './constants';

function getPhoto() {
    return {
        type: FETCH_PHOTO,
    };
}

function receivePhoto(photo) {
    return {
        type: RECEIVE_PHOTO,
        photo,
    };
}

const actions = {
    fetchPhoto: (name) => {
        return (dispatch) => {
            dispatch(getPhoto());

            axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB3LWMp0eyBsY6FATZxkGPveaZJqRS_wkY&cx=007439162790014027398:6eromrn-ov0&q=${name}&searchType=image&num=1&imgDominantColor=white`)
                .then(res => {
                    const photo = res.data.items[0].link;

                    dispatch(receivePhoto(photo));
                });
        };
    },
};

export default actions;
