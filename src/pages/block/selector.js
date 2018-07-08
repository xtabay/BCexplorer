import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [
        state => state.get('blockEntity'),
    ],
    (blockEntity) => ({ block: blockEntity })
);