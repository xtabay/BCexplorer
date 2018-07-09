import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import { fetchSingleBlock } from 'actions/blocks';
import BlockInfo from 'pages/block/view/blockTx';

import { mapStateToProps } from './selector';

class Blocks extends React.PureComponent {
    constructor(props) {
        super();

        this.id = props.match.params.id;
    }

    componentDidMount() {
        const { block, actions } = this.props;

        if (block.get(this.id)) {
            return;
        }

        actions.fetchSingleBlock(this.id);
    }

    render() {
        const { block, location: { search }, history } = this.props;
        const offset = Number(queryString.parse(search).offset) || 0;
        const entity = block.get(this.id);

        return (
            <BlockInfo
                height={this.id}
                offset={offset}
                history={history}
                block={entity && entity.toJS()}
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