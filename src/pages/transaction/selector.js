import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [
        state => state.get('transactionEntity'),
    ],
    (transactionEntity) => ({ transaction: transactionEntity })
);