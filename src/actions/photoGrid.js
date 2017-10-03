import axios from 'axios';
import {PHOTO_GRID_API, PHOTO_GRID_API_SUCCESS, PHOTO_GRID_API_ERROR} from '../constants/photoGrid';


export const getPopularPhotos = () => {
    return (dispatch) => {
        dispatch({type: PHOTO_GRID_API});
        axios({
            method: 'post',
            url: 'functions/feed/popular/load-batch',
            data: {
                "isThumbnailsOnly": true,
                "limit": 18,
                "_method": "POST",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => {
            dispatch({type: PHOTO_GRID_API_SUCCESS, popularPhotos: response.data.result})
        }).catch(function (error) {
            dispatch({type: PHOTO_GRID_API_ERROR, error})
        });
    }
};