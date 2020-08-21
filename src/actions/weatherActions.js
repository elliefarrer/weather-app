import axios from 'axios';
import { GET_WEATHER_DATA, SET_WEATHER_ERROR } from './types';

export const getWeatherData = (lat, lon) => (dispatch) => {
    axios
        .get(
            `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_API_KEY}/${lat},${lon}`
        )
        .then((res) => {
            console.log('res', res);
            dispatch({
                type: GET_WEATHER_DATA,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_WEATHER_ERROR,
                payload: err.message,
            });
        });
};
