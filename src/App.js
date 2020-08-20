import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Footer, Home, Postcode, Results } from './containers';

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
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);
