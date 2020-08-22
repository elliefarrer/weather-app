import { formValueSelector } from 'redux-form';

const FORM_NAME = 'POSTCODE_FORM';

const postcodeFormSelector = formValueSelector(FORM_NAME);

export const postcodeSelector = (state) =>
    postcodeFormSelector(state, 'postcode');
export const latSelector = (state) => state.postcode.postcode?.latitude;
export const lonSelector = (state) => state.postcode.postcode?.longitude;
