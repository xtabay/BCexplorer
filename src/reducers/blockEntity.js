import { Map } from 'immutable';

import { FETCH_SINGLE_BLOCK, FETCH_SINGLE_BLOCK_FAILED, FETCH_SINGLE_BLOCK_COMPLETED } from 'actions/blocks';

const initialState = Map({
    isLoading: false,
    isError: false,
    entity: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_BLOCK:
            return initialState.set('isLoading', true);

        case FETCH_SINGLE_BLOCK_COMPLETED:
            return state.set('isLoading', false).set('entity', action.payload.data.blocks[0]);

        case FETCH_SINGLE_BLOCK_FAILED:
            return state.set('isLoading', false).set('isError', false);

        default:
            return state
    }
};