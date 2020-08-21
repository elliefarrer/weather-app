import { GET_WEATHER_DATA, SET_WEATHER_ERROR } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_WEATHER_DATA:
            return {
                ...state,
                weather: action.payload,
            };
        case SET_WEATHER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
