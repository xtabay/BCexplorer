import { Map } from 'immutable';

import { FETCH_MONTH_COSTS, FETCH_MONTH_COSTS_COMPLETED, FETCH_MONTH_COSTS_FAILED } from 'actions/costChart';

const initialState = Map({
    isLoading: false,
    isError: false,
    values: []
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MONTH_COSTS:
            return initialState.set('isLoading', true);

        case FETCH_MONTH_COSTS_COMPLETED:
            return state.set('isLoading', false).set('values', action.payload.data.values);

        case FETCH_MONTH_COSTS_FAILED:
            return state.set('isLoading', false).set('isError', true);

        default:
            return state
    }
};