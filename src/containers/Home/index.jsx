import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPostcodesData } from '../../actions/postcodesActions';
import { getWeatherData } from '../../actions/weatherActions';
import * as selectors from '../../selectors';
import { Container } from '../../components';
import { Form, Results } from './components';

const Home = ({
    getPostcodesData,
    getWeatherData,
    postcode,
    lat,
    lon
}) => {
    const [showWeatherModal, setShowWeatherModal] = useState(false);
    return (
        <div className="Home">
            <Container>
                <div className="Home__inner">
                    <h1 className="Home__hero">Welcome to Whether Weather</h1>

                    <Form
                        getPostcodesData={getPostcodesData}
                        getWeatherData={getWeatherData}
                        postcode={postcode}
                        lat={lat}
                        lon={lon}
                        setShowWeatherModal={setShowWeatherModal}
                    />
                </div>

                {showWeatherModal &&
                    <Results onClose={() => setShowWeatherModal(false)} />
                }
            </Container>
        </div>
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