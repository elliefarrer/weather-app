import axios from 'axios';
import { GET_POSTCODE_DATA, SET_POSTCODE_ERROR } from './types';

export const getPostcodesData = (postcode) => (dispatch) => {
    axios
        .get(`http://api.postcodes.io/postcodes/${postcode}`)
        .then((res) => {
            const {
                data: { result },
            } = res;
            dispatch({
                type: GET_POSTCODE_DATA,
                payload: result,
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_POSTCODE_ERROR,
                payload: err.message,
            });
        });
};
