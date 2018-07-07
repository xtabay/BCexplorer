import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Loader from 'components/loader';
import { Row, Cell, ShowMore } from 'components/tables';

export default class Transactions extends React.PureComponent {
    getLink = hash => `/block/${hash}`;

    renderList(values) {
        return (
            <React.Fragment>
                <Row>
                    <Cell big>Weight</Cell>
                    <Cell big>Hash</Cell>
                    <Cell big>Time</Cell>
                </Row>
                {values
                    .slice(0, 10)
                    .map(({ weight, hash, time }) => (
                        <React.Fragment key={hash}>
                            <hr />
                            <Row>
                                <Cell>{weight}</Cell>
                                <Link to={this.getLink(hash)}>{hash}</Link>
                                <Cell>{dayjs().from(dayjs(time*1000), true)} ago</Cell>
                            </Row>
                        </React.Fragment>
                    ))
                }
                {values.length > 10 ? <Row centered><ShowMore to="/block">Show all blocks</ShowMore></Row> : null}
            </React.Fragment>
        );
    }

    render() {
        const { isLoading, isError, transactions } = this.props.transactions;

        if (isError) {
            return <h1>Что-то пошло не так, попробуйте зайти позже</h1>
        }

        return (
            <div>
                <h1>10 Latest Blocks</h1>
                {transactions === null || isLoading ? <Loader /> : this.renderList(transactions)}
            </div>
        );
    }
}