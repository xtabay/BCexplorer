import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import { fetchSingleBlock } from 'actions/blocks';
import BlockInfo from 'pages/block/view/blockTx';

import { mapStateToProps } from './selector';

class Blocks extends React.PureComponent {
    componentDidMount() {
        const { block, actions, match: { params: { id } } } = this.props;

        if (block.get('entity')) {
            return;
        }

        actions.fetchSingleBlock(Number(id));
    }

    render() {
        const { block, match, location: { search }, history } = this.props;
        const offset = Number(queryString.parse(search).offset) || 0;

        return (
            <BlockInfo
                offset={offset}
                history={history}
                height={match.params.id}
                block={block.get('entity')}
                isError={block.get('isError')}
                isLoading={block.get('isLoading')}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchSingleBlock }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);