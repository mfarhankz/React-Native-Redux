import axios from 'axios';
import {PHOTO_SLIDER_API, PHOTO_SLIDER_API_SUCCESS, PHOTO_SLIDER_API_ERROR} from '../constants/photoSlider';


export const getUserPhotos = () => {
    return (dispatch) => {
        dispatch({type: PHOTO_SLIDER_API});
        axios({
            method: 'post',
            url: 'functions/feed/profile/load-batch',
            data: {
                "isThumbnailsOnly": true,
                "limit": 5,
                "userId": 2707798,
                "_method": "POST",
                "_version": "5.0.5",
                "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
            }
        }).then( (response) => {
            dispatch({type: PHOTO_SLIDER_API_SUCCESS, userPhotos: response.data.result})
        }).catch(function (error) {
            dispatch({type: PHOTO_SLIDER_API_ERROR, error})
        });
    }
};