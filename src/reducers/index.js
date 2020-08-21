import { combineReducers } from 'redux';
import PostcodeReducer from './postcodes';

export default combineReducers({
    postcode: PostcodeReducer,
});
