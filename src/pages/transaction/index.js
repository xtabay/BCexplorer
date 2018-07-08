import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSingleTransaction } from 'actions/transactions';
import TxInfo from 'pages/transaction/view/txInfo';

import { mapStateToProps } from './selector';

class Blocks extends React.PureComponent {
    componentDidMount() {
        const { transaction, actions, match: { params: { id } } } = this.props;

        if (transaction.get('entity')) {
            return;
        }

        actions.fetchSingleTransaction(id);
    }

    render() {
        const { transaction, match } = this.props;

        return (
            <TxInfo
                hash={match.params.id}
                transaction={transaction.get('entity')}
                isError={transaction.get('isError')}
                isLoading={transaction.get('isLoading')}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchSingleTransaction }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);