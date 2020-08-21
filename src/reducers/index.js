import { combineReducers } from 'redux';
import PostcodeReducer from './postcodes';
import WeatherReducer from './weather';

export default combineReducers({
    postcode: PostcodeReducer,
    weather: WeatherReducer,
});
