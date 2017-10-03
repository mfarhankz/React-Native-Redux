import {PHOTO_SLIDER_API, PHOTO_SLIDER_API_SUCCESS, PHOTO_SLIDER_API_ERROR} from '../constants/photoSlider';
import {PHOTO_GRID_API, PHOTO_GRID_API_SUCCESS, PHOTO_GRID_API_ERROR} from '../constants/photoGrid';

//initial state.
const initialState = {
    loading: false
};

export function userPhotosReducer (state = initialState, action = {}) {
    switch (action.type) {
        case PHOTO_SLIDER_API:
            return Object.assign({}, state, {loading: true});
        case PHOTO_SLIDER_API_SUCCESS:
            return Object.assign({}, state, {loading: false}, action.userPhotos);
        case PHOTO_SLIDER_API_ERROR:
            return Object.assign({}, state, {loading: false});
        default:
            return state
    }
}

export function popularPhotosReducer (state = initialState, action = {}) {
    switch (action.type) {
        case PHOTO_GRID_API:
            return Object.assign({}, state, {loading: true});
        case PHOTO_GRID_API_SUCCESS:
            return Object.assign({}, state, {loading: false}, action.popularPhotos);
        case PHOTO_GRID_API_ERROR:
            return Object.assign({}, state, {loading: false});
        default:
            return state
    }
}