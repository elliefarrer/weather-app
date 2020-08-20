import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

// Initialise state, this is where you put stuff that you want on state from the start.
const initialState = {};

// Create the store with: the reducer(s), the state, and some middleware
const store = createStore(
    rootReducer,
    initialState,
    compose(
        // Can stick middleware from redux-thunk here. Would it be useful to show? Talk through what it does.

        // Gets Redux dev tools on your browser.
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
