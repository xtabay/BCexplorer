import axios from 'axios';

export const FETCH_TODAY_TRANSACTIONS = 'FETCH_TODAY_TRANSACTIONS';
export const FETCH_TODAY_TRANSACTIONS_COMPLETED = 'FETCH_TODAY_TRANSACTIONS_COMPLETED';
export const FETCH_TODAY_TRANSACTIONS_FAILED = 'FETCH_TODAY_TRANSACTIONS_FAILED';

export const FETCH_SINGLE_TRANSACTION = 'FETCH_SINGLE_TRANSACTION';
export const FETCH_SINGLE_TRANSACTION_COMPLETED = 'FETCH_SINGLE_TRANSACTION_COMPLETED ';
export const FETCH_SINGLE_TRANSACTION_FAILED = 'FETCH_SINGLE_TRANSACTION_FAILED';

export const fetchLastBlockTransactions = blockHeight => async dispatch => {
    let transactions;

    dispatch({ type: FETCH_TODAY_TRANSACTIONS });

    try {
        transactions = await axios.get(`https://blockchain.info/block-height/${blockHeight}?cors=true&format=json`);
    } catch (e) {
        return dispatch({ type: FETCH_TODAY_TRANSACTIONS_FAILED });
    }

    dispatch({ type: FETCH_TODAY_TRANSACTIONS_COMPLETED, payload: transactions });
};

export const fetchSingleTransaction = transactionHash => async dispatch => {
    let transaction;

    dispatch({ type: FETCH_SINGLE_TRANSACTION });

    try {
        transaction = await axios.get(`https://blockchain.info/rawtx/${transactionHash}?cors=true`);
    } catch (e) {
        return dispatch({ type: FETCH_SINGLE_TRANSACTION_FAILED });
    }

    dispatch({ type: FETCH_SINGLE_TRANSACTION_COMPLETED, payload: transaction });
};
