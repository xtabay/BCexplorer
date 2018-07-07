import { Map } from 'immutable';

import { FETCH_TODAY_BLOCKS, FETCH_TODAY_BLOCKS_COMPLETED, FETCH_TODAY_BLOCKS_FAILED } from 'actions/blocks';

const initialState = Map({
    isLoading: false,
    isError: false,
    values: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODAY_BLOCKS:
            return initialState.set('isLoading', true);

        case FETCH_TODAY_BLOCKS_COMPLETED:
            return state.set('isLoading', false).set('values', action.payload.data.blocks);

        case FETCH_TODAY_BLOCKS_FAILED:
            return state.set('isLoading', false).set('isError', true);

        default:
            return state
    }
};