import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodayBlocks, fetchSingleBlock } from 'actions/blocks';
import { fetchSingleTransaction } from 'actions/transactions';
import { fetchMonthCosts } from 'actions/costChart';

import Table from 'pages/main/views/table';
import Chart from 'pages/main/views/chart';
import Search from 'pages/main/views/search';

import { mapStateToProps } from './selector';

const SVG_PARAMS = {
    width: '100%',
    height: 400,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    innerHeight: 350,
    marginLeft: 50
};

class Main extends React.Component {
    componentDidMount() {
        const { fetchMonthCosts, fetchTodayBlocks } = this.props.actions;

        fetchTodayBlocks();
        fetchMonthCosts();
    }

    render() {
        const { blocks, transactions, graphicData, blockEntity, txEntity, actions } = this.props;

        return (
            <React.Fragment>
                <Chart
                    data={graphicData}
                    params={SVG_PARAMS}
                />
                <Table
                    title="blocks"
                    isError={blocks.isError}
                    isLoading={blocks.isLoading}
                    values={blocks.values}
                />
                <Table
                    transaction
                    title="transactions"
                    isError={transactions.isError}
                    isLoading={transactions.isLoading}
                    values={transactions.values}
                />
                <Search
                    isLoading={blockEntity.isLoading}
                    isError={blockEntity.isError}
                    entity={blockEntity.entity}
                    onSearch={actions.fetchSingleBlock}
                />
                <hr />
                <Search
                    transaction
                    isLoading={txEntity.isLoading}
                    isError={txEntity.isError}
                    entity={txEntity.entity}
                    onSearch={actions.fetchSingleTransaction}
                />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchTodayBlocks,
        fetchMonthCosts,
        fetchSingleBlock,
        fetchSingleTransaction
    }, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);