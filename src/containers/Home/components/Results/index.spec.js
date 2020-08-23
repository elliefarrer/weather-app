import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import rootReducer from '../../../../reducers';
import Results from './index.jsx';

const initialState = {
    postcode: {
        postcode: {
            admin_district: 'Hammersmith & Fulham',
        },
    },
    weather: {
        weather: {
            currently: {
                time: 1598132035,
                summary: 'Clear',
                temperature: 32,
                apparentTemperature: 32,
                humidity: 0.5,
                uvIndex: 1,
                visibility: 10,
                precipProbability: 20,
                windSpeed: 5,
            },
        },
    },
};

const noWeatherState = {
    postcode: {
        postcode: {
            admin_district: 'Hammersmith & Fulham',
        },
    },
};

let wrapper;

const setup = ({ initState = initialState } = {}) => {
    const store = createStore(rootReducer, initState);

    wrapper = mount(
        <Provider store={store}>
            <Results />
        </Provider>
    );
};

describe('Results - with weather data', () => {
    beforeEach(() => {
        setup();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should display the correctly formatted data', () => {
        const results = wrapper.find(Results);
        expect(results.text()).toContain('Hammersmith & Fulham');
        expect(results.text()).toContain('Clear');
        expect(results.text()).toContain('12:01');
        expect(results.text()).toContain('Temperature: 0°C');
        expect(results.text()).toContain('Humidity: 50%');
        expect(results.text()).toContain('Visibility: 10km');
        expect(results.text()).toContain('Chance of rain: 20%');
        expect(results.text()).toContain('Wind speed: 5kph');
    });
});

describe('Results - no weather data', () => {
    beforeEach(() => {
        setup({ initState: noWeatherState });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should show the loading message', () => {
        const results = wrapper.find(Results);
        expect(results.text()).toContain('Fetching data, please wait');
    });
});
