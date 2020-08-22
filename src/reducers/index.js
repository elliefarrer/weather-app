import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostcodeReducer from './postcodes';
import WeatherReducer from './weather';

export default combineReducers({
    postcode: PostcodeReducer,
    weather: WeatherReducer,
    form: formReducer,
});
