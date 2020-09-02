import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Modal } from '../../../../components';
import * as selectors from '../../../../selectors';
import { formatCelsiusTemp, formatHumidity } from '../../../../formatters';

const Results = ({ adminDistrict, currently, onClose }) => (
    <Modal onClose={onClose}>
        <h1 className="Results__title">{adminDistrict}</h1>

        {currently ? (
            <div>
                <h2 className="Results__subtitle">
                    {currently.summary},{' '}
                    <small>
                        taken at {moment(currently.time).format('HH:MM')}
                    </small>
                </h2>

                <table className="Results__table">
                    <tbody>
                        <tr>
                            <td>Temperature: </td>
                            <td>
                                {formatCelsiusTemp(currently.temperature)}
                                °C
                            </td>
                        </tr>
                        <tr>
                            <td>Feels like:</td>
                            <td>
                                {formatCelsiusTemp(
                                    currently.apparentTemperature
                                )}
                                °C
                            </td>
                        </tr>
                        <tr>
                            <td>Chance of rain:</td>
                            <td>{currently.precipProbability}%</td>
                        </tr>
                        <tr>
                            <td>Humidity:</td>
                            <td>{formatHumidity(currently.humidity)}%</td>
                        </tr>
                        <tr>
                            <td>Wind speed:</td>
                            <td>{currently.windSpeed}kph</td>
                        </tr>
                        <tr>
                            <td>UV index:</td>
                            <td>{currently.uvIndex}</td>
                        </tr>
                        <tr>
                            <td>Visibility:</td>
                            <td>{currently.visibility}km</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ) : (
            <p>Fetching data, please wait</p>
        )}
    </Modal>
);

Results.propTypes = {
    adminDistrict: PropTypes.string,
    currently: PropTypes.object,
    onClose: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    adminDistrict: selectors.adminDistrictSelector(state),
    currently: selectors.currentlySelector(state),
})

export default connect(mapStateToProps)(Results);
