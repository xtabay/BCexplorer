import { createSelector } from 'reselect';

export const mapStateToProps = createSelector(
    [
        state => state.get('blocks'),
    ],
    (blocks) => ({ blocks })
);