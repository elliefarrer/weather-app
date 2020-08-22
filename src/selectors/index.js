import { formValueSelector } from 'redux-form';

const FORM_NAME = 'POSTCODE_FORM';

const postcodeFormSelector = formValueSelector(FORM_NAME);

export const postcodeSelector = (state) =>
    postcodeFormSelector(state, 'postcode');
export const latSelector = (state) => state.postcode.postcode?.latitude;
export const lonSelector = (state) => state.postcode.postcode?.longitude;
export const adminDistrictSelector = (state) =>
    state.postcode.postcode?.admin_district;
export const currentlySelector = (state) => state.weather.weather?.currently;
