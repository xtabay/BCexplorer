import { FETCH_TODAY_BLOCKS, FETCH_TODAY_BLOCKS_COMPLETED, FETCH_TODAY_BLOCKS_FAILED } from 'actions/blocks';

const initialState = {
    isLoading: false,
    isError: false,
    values: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODAY_BLOCKS:
            return {
                ...initialState,
                isLoading: true
            };

        case FETCH_TODAY_BLOCKS_COMPLETED:
            return {
                ...state,
                isLoading: false,
                values: action.payload.data.blocks
            };

        case FETCH_TODAY_BLOCKS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        
        default:
            return state
    }
};