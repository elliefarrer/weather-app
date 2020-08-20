import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header, Footer, Home, Postcode, Results } from './containers';
import store from './store';

const App = () => (
    <div>
        <Header />

        <main id="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/results" component={Results} />
                <Route path="/results/:id" component={Postcode} />
            </Switch>
        </main>

        <Footer />
    </div>
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
