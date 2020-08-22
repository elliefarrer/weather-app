import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Modal } from '../../../../components';
import * as selectors from '../../../../selectors';
import { formatCelsiusTemp, formatHumidity } from '../../../../formatters';

const Results = ({ adminDistrict, currently }) => (
    <Modal>
        <h1>{adminDistrict}</h1>

        {currently ? (
            <div>
                <h2>
                    {currently.summary},{' '}
                    <small>
                        taken at {moment(currently.time).format('HH:MM')}
                    </small>
                </h2>

                <div>
                    <p>
                        Temperature: {formatCelsiusTemp(currently.temperature)}
                        °C
                    </p>
                    <p>Feels like: {formatCelsiusTemp(currently.apparentTemperature)}°C</p>
                    <p>Chance of rain: {currently.precipProbability}%</p>
                    <p>Humidity: {formatHumidity(currently.humidity)}%</p>
                    <p>Wind speed: {currently.windSpeed}kph</p>
                    <p>UV index: {currently.uvIndex}</p>
                    <p>Visibility: {currently.visibility}km</p>
                </div>
            </div>
        ) : (
            <p>Fetching data, please wait</p>
        )}
    </Modal>
);

const mapStateToProps = state => ({
    adminDistrict: selectors.adminDistrictSelector(state),
    currently: selectors.currentlySelector(state),
})

export default connect(mapStateToProps)(Results);
