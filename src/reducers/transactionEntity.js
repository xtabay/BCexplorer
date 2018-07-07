import { Map } from 'immutable';

import { FETCH_SINGLE_TRANSACTION, FETCH_SINGLE_TRANSACTION_COMPLETED, FETCH_SINGLE_TRANSACTION_FAILED } from 'actions/transactions';

const initialState = Map({
    isLoading: false,
    isError: false,
    entity: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_TRANSACTION:
            return initialState.set('isLoading', true);

        case FETCH_SINGLE_TRANSACTION_COMPLETED:
            return state.set('isLoading', false).set('entity', action.payload.data);

        case FETCH_SINGLE_TRANSACTION_FAILED:
            return state.set('isLoading', false).set('isError', true);

        default:
            return state
    }
};