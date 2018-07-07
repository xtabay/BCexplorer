import { FETCH_MONTH_COSTS, FETCH_MONTH_COSTS_COMPLETED, FETCH_MONTH_COSTS_FAILED } from 'actions/costChart';

const initialState = {
    isLoading: false,
    isError: false,
    values: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MONTH_COSTS:
            return {
                ...initialState,
                isLoading: true
            };

        case FETCH_MONTH_COSTS_COMPLETED:
            return {
                ...state,
                isLoading: false,
                values: action.payload.data.values
            };

        case FETCH_MONTH_COSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            };

        default:
            return state
    }
};