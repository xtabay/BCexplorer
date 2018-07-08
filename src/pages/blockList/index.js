import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import { fetchTodayBlocks } from 'actions/blocks';

import List from 'pages/blockList/view/list';

import { mapStateToProps } from './selector';

class Blocks extends React.PureComponent {
    componentDidMount() {
        const { blocks, actions } = this.props;

        if (blocks.get('values')) {
            return;
        }

        actions.fetchTodayBlocks(true);
    }

    render() {
        const { blocks, history, location: { search } } = this.props;
        const { offset } = queryString.parse(search);

        return (
            <List
                history={history}
                offset={Number(offset) || 0}
                isLoading={blocks.get('isLoading')}
                isError={blocks.get('isError')}
                values={blocks.get('values')}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchTodayBlocks }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);