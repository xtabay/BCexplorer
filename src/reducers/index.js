import { combineReducers } from 'redux-immutable';

import blocks from './blocks';
import transactions from './transactions';
import costChart from './costChart';
import blockEntity from './blockEntity';
import transactionEntity from './transactionEntity';

export default combineReducers({
    blocks,
    transactions,
    costChart,
    blockEntity,
    transactionEntity
});