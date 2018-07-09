import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSingleTransaction } from 'actions/transactions';
import TxInfo from 'pages/transaction/view/txInfo';

import { mapStateToProps } from './selector';

class Blocks extends React.PureComponent {
    constructor(props) {
        super();

        this.id = props.match.params.id;
    }

    componentDidMount() {
        const { transaction, actions } = this.props;

        if (transaction.get(this.id)) {
            return;
        }

        actions.fetchSingleTransaction(this.id);
    }

    render() {
        const { transaction } = this.props;
        const entity = transaction.get(this.id);

        return (
            <TxInfo
                hash={this.id}
                transaction={entity && entity.toJS()}
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