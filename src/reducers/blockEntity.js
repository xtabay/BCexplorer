import { FETCH_SINGLE_BLOCK, FETCH_SINGLE_BLOCK_FAILED, FETCH_SINGLE_BLOCK_COMPLETED } from 'actions/blocks';

const initialState = {
    isLoading: false,
    isError: false,
    entity: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_BLOCK:
            return {
                ...initialState,
                isLoading: true
            };

        case FETCH_SINGLE_BLOCK_COMPLETED:
            return {
                ...state,
                isLoading: false,
                entity: action.payload.data.blocks[0]
            };

        case FETCH_SINGLE_BLOCK_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state
    }
};