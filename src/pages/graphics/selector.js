import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [state => state.get('blocks')],
    (blocks) => {
        const values = blocks.get('values');

        return values && values.map({})
    }
);