import { Map } from 'immutable';

import { FETCH_TODAY_TRANSACTIONS, FETCH_TODAY_TRANSACTIONS_COMPLETED, FETCH_TODAY_TRANSACTIONS_FAILED } from 'actions/transactions';

const initialState = Map({
    isLoading: false,
    isError: false,
    values: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODAY_TRANSACTIONS:
            return initialState.set('isLoading', true);

        case FETCH_TODAY_TRANSACTIONS_COMPLETED:
            return state.set('isLoading', false).set('values', action.payload.data.blocks[0].tx);

        case FETCH_TODAY_TRANSACTIONS_FAILED:
            return state.set('isLoading', false).set('isError', true);
        
        default:
            return state
    }
};