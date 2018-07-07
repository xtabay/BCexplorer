import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [
        state => state.get('blocks'),
        state => state.get('transactions'),
        state => state.get('costChart').get('values'),
        state => state.get('blockEntity'),
        state => state.get('transactionEntity')
    ],
    (blocks, transactions, chartValues, blockEntity, txEntity) => {
        const graphicData = chartValues.map(({ x, y }) => ({
            date: new Date(x * 1000),
            value: y
        }));

        return ({
            blocks,
            transactions,
            graphicData,
            blockEntity,
            txEntity
        });
    }
);