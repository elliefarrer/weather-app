import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Header, Footer, Home } from './containers';
import store from './store';
import './style/reset.css';
import './style/main.scss';

const App = () => (
    <div>
        <Header />

        <main id="content">
            <Home />
        </main>

        <Footer />
    </div>
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
