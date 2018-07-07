import { FETCH_TODAY_TRANSACTIONS, FETCH_TODAY_TRANSACTIONS_COMPLETED, FETCH_TODAY_TRANSACTIONS_FAILED } from 'actions/transactions';

const initialState = {
    isLoading: false,
    isError: false,
    values: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODAY_TRANSACTIONS:
            return {
                ...initialState,
                isLoading: true
            };

        case FETCH_TODAY_TRANSACTIONS_COMPLETED:
            return {
                ...state,
                isLoading: false,
                values: action.payload.data.blocks[0].tx
            };

        case FETCH_TODAY_TRANSACTIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        
        default:
            return state
    }
};