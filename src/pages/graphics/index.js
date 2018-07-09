import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTodayBlocks } from 'actions/blocks';

import Chart from 'pages/graphics/views/chart';

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
        this.props.actions.fetchTodayBlocks();
    }

    render() {
        const { blocks } = this.props;

        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchTodayBlocks }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);