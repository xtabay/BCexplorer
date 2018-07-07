import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [
        state => state.blocks,
        state => state.transactions,
        state => state.costChart.values,
        state => state.blockEntity,
        state => state.transactionEntity
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