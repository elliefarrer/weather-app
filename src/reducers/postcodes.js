import { GET_POSTCODE_DATA, SET_POSTCODE_ERROR } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_POSTCODE_DATA:
            return {
                ...state,
                postcode: action.payload,
            };
        case SET_POSTCODE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
