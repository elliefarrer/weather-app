import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostcodesData } from '../../actions/postcodesActions';
import { getWeatherData } from '../../actions/weatherActions';

const Home = ({ getPostcodesData, getWeatherData }) => {
    useEffect(() => {
        getPostcodesData('SW62AT');
        getWeatherData('51.476075', '-0.191807');
    }, [])
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

const mapStateToProps = state => ({
    postcode: state.postcode
})

export default connect(mapStateToProps, { getPostcodesData, getWeatherData })(Home);