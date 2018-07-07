import { FETCH_SINGLE_TRANSACTION, FETCH_SINGLE_TRANSACTION_COMPLETED, FETCH_SINGLE_TRANSACTION_FAILED } from 'actions/transactions';

const initialState = {
    isLoading: false,
    isError: false,
    entity: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_TRANSACTION:
            return {
                ...initialState,
                isLoading: true
            };

        case FETCH_SINGLE_TRANSACTION_COMPLETED:
            return {
                ...state,
                isLoading: false,
                entity: action.payload.data
            };

        case FETCH_SINGLE_TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state
    }
};