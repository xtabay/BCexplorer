import axios from 'axios';

export const FETCH_MONTH_COSTS = 'FETCH_MONTH_COSTS';
export const FETCH_MONTH_COSTS_COMPLETED = 'FETCH_MONTH_COSTS_COMPLETED';
export const FETCH_MONTH_COSTS_FAILED = 'FETCH_MONTH_COSTS_FAILED';

export const fetchMonthCosts = () => dispatch => {
    dispatch({ type: FETCH_MONTH_COSTS });

    axios.get('https://api.blockchain.info/charts/market-price?cors=true&timespan=30days&format=json&lang=ru') //понял про последний месяц, как последние 30 дней, возможно надо было через getDay, и только за прошедшие дни текущего месяца
        .then(
            response => dispatch({
                type: FETCH_MONTH_COSTS_COMPLETED,
                payload: response
            }),
            () => dispatch({ type: FETCH_MONTH_COSTS_FAILED })
        )
}