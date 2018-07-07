import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Loader from 'components/loader';
import { Row, Cell, ShowMore } from 'components/tables';

const Hash = styled(Link)`
    text-decoration: none;
`;

export default class Blocks extends React.PureComponent {
    getLink = hash => `/${this.props.title}/${hash}`;

    renderList(values) {
        const { title, transaction } = this.props;

        return (
            <React.Fragment>
                <Row>
                    <Cell big>{transaction ? 'W': 'H'}eight</Cell>
                    <Cell big>Hash</Cell>
                    <Cell big>Time</Cell>
                </Row>
                {values
                    .slice(0, 10)
                    .map(({ height, hash, time, weight }) => (
                        <React.Fragment key={hash}>
                            <hr />
                            <Row>
                                {transaction ?
                                    [
                                        <Cell key={1}>
                                            {weight}
                                        </Cell>,
                                        <Cell key={2}><Hash to={this.getLink(hash)}>{hash}</Hash></Cell>
                                    ] :
                                    [
                                        <Cell key={1}>
                                            <Hash to={this.getLink(height)}>{height}</Hash>
                                        </Cell>,
                                        <Cell key={2}>{hash}</Cell>
                                    ]
                                }
                                <Cell>{dayjs().from(dayjs(time*1000), true)} ago</Cell>
                            </Row>
                        </React.Fragment>
                    ))
                }
                {values.length > 10 && !transaction ? (
                    <Row centered>
                        <ShowMore to="/blocks">
                            Show all {title}
                        </ShowMore>
                    </Row>
                ) : null}
            </React.Fragment>
        );
    }

    render() {
        const { isLoading, isError, values, title } = this.props;

        if (isError) {
            return <h1>Что-то пошло не так, попробуйте зайти позже</h1>
        }

        return (
            <div>
                <h1>10 Latest {title}</h1>
                {values === null || isLoading ? <Loader /> : this.renderList(values)}
            </div>
        );
    }
}