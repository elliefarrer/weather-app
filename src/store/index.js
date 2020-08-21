import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Initialise state, this is where you put stuff that you want on state from the start.
const initialState = {};

// Use middleware to have async action calls
const middleware = [thunk];

// Create the store with: the reducer(s), the state, and some middleware
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // Gets Redux dev tools on your browser.
        // Have a slide on Redux dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
