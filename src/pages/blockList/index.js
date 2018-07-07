import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodayBlocks } from 'actions/blocks';

import { mapStateToProps } from './selector';

class BlockList extends React.PureComponent {
    componentDidMount() {
        const { blocks, actions } = this.props;

        if (blocks.get('values')) {
            return;
        }

        actions.fetchTodayBlocks();
    }

    render() {
        return <div>123</div>
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchTodayBlocks }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);