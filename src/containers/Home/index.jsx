import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostcodesData } from '../../actions/postcodesActions';

const Home = ({ getPostcodesData }) => {
    useEffect(() => {
        getPostcodesData('SW62AT');
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

export default connect(mapStateToProps, { getPostcodesData })(Home);