import React from 'react';

import Loader from 'components/loader';
import TxList from 'pages/block/view/txList';
import BlockInfo from 'pages/block/view/blockInfo';

export default class BlockTx extends React.PureComponent {
    renderContent() {
        const { block, isLoading, isError, offset, history } = this.props;


        if (isError) return <h2>Oops, something went wrong</h2>;

        if (block === null || isLoading) return <Loader />;

        return (
            <React.Fragment>
                <BlockInfo block={block} />
                <TxList
                    offset={offset}
                    tx={block.tx}
                    history={history}
                />
            </React.Fragment>
        );
    }

    render() {
        const { height } = this.props;

        return (
            <div>
            <h1>Block #{height}</h1>
            {this.renderContent()}
            </div>
        );
    }
}