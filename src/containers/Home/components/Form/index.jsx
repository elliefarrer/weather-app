import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = ({
    getWeatherData,
    getPostcodesData,
    postcode,
    lat,
    lon,
    setShowWeatherModal,
    handleSubmit,
    submitting,
    pristine
}) => { 
    const submit = async () => {
        await getPostcodesData(postcode.replace(/ /g, ''))
    }

    useEffect(() => {
        if (lat && lon) {
            getWeatherData(lat, lon);
            setShowWeatherModal(true);
        }
    }, [lat, lon]);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="postcode">Postcode</label>
                <Field
                    name="postcode"
                    type="text"
                    component="input"
                    placeholder="Postcode"
                />
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>
                    {submitting ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'POSTCODE_FORM',
})(Form);
