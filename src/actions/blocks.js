import axios from 'axios';

import { fetchLastBlockTransactions } from 'actions/transactions';

export const FETCH_TODAY_BLOCKS = 'FETCH_TODAY_BLOCKS';
export const FETCH_TODAY_BLOCKS_COMPLETED = 'FETCH_TODAY_BLOCKS_COMPLETED';
export const FETCH_TODAY_BLOCKS_FAILED = 'FETCH_TODAY_BLOCKS_FAILED';

export const FETCH_SINGLE_BLOCK = 'FETCH_SINGLE_BLOCK';
export const FETCH_SINGLE_BLOCK_COMPLETED = 'FETCH_SINGLE_BLOCK_COMPLETED';
export const FETCH_SINGLE_BLOCK_FAILED = 'FETCH_SINGLE_BLOCK_FAILED';

export const fetchTodayBlocks = (isList) => async dispatch => {
    let blocks;

    dispatch({ type: FETCH_TODAY_BLOCKS });

    try {
        blocks = await axios.get('https://blockchain.info/blocks/?format=json&cors=true');

    } catch (e) {
        return dispatch({ type: FETCH_TODAY_BLOCKS_FAILED })
    }

    dispatch({
        type: FETCH_TODAY_BLOCKS_COMPLETED,
        payload: blocks
    });

    if (isList) return;

    dispatch(fetchLastBlockTransactions(blocks.data.blocks[0].height))
};

export const fetchSingleBlock = blockHeight => async dispatch => {
    let block;

    dispatch({ type: FETCH_SINGLE_BLOCK });

    try {
        block = await axios.get(`https://blockchain.info/block-height/${blockHeight}?cors=true&format=json`);
    } catch (e) {
        return dispatch({ type: FETCH_SINGLE_BLOCK_FAILED });
    }

    if (!block.data.blocks) return dispatch({ type: FETCH_SINGLE_BLOCK_FAILED });

    dispatch({ type: FETCH_SINGLE_BLOCK_COMPLETED, payload: block });
};