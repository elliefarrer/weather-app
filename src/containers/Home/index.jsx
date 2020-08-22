import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPostcodesData } from '../../actions/postcodesActions';
import { getWeatherData } from '../../actions/weatherActions';
import * as selectors from '../../selectors';
import { Form } from './components';

const Home = ({
    getPostcodesData,
    getWeatherData,
    postcode,
    lat,
    lon
}) => {
    const [showWeatherModal, setShowWeatherModal] = useState(false);
    return (
        <>
            <h1>Home</h1>

            <Form
                getPostcodesData={getPostcodesData}
                getWeatherData={getWeatherData}
                postcode={postcode}
                lat={lat}
                lon={lon}
                setShowWeatherModal={setShowWeatherModal}
            />

            {showWeatherModal &&
                <p>This works</p>
            }
        </>
    );
}

const mapStateToProps = state => ({
    postcode: selectors.postcodeSelector(state, 'postcode'),
    lat: selectors.latSelector(state),
    lon: selectors.lonSelector(state)
})

export default connect(
    mapStateToProps,
    { getPostcodesData, getWeatherData }
)(Home);