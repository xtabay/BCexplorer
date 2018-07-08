import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import Pagination from 'components/pagination';

const Block = styled.div`
    min-height: 150px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    padding: 20px;
`;

const Hash = styled(Link)`
    display: block;
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;    
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;
    word-break: break-all;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 30px;
`;

const Text = styled.div`
    word-break: break-all;
    font-size: 20px;
`;

const LIMIT = 5;

export default class List extends React.PureComponent {
    handleChangePagination = offset => this.props.history.push({search: `offset=${offset}`});

    renderItem({ weight, hash, main_chain, time, size }) {
        return (
            <Block key={hash}>
                <Hash to={`/transaction/${hash}`}>{hash}</Hash>
                <Info>
                    <Text>Weight: {weight}</Text>
                    <Text>Size: {size}</Text>
                    <Text>Time: {dayjs().from(dayjs(time*1000), true)} ago</Text>
                </Info>
            </Block>
        );
    }

    renderContent() {
        const { tx, offset } = this.props;

        return (
            <React.Fragment>
                {tx.slice(offset, offset + LIMIT).map(transaction => this.renderItem(transaction))}
                <Pagination
                    max={tx.length}
                    limit={LIMIT}
                    offset={offset}
                    onChange={this.handleChangePagination}
                />
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <h1>Transactions List</h1>
                {this.renderContent()}
            </div>
        );
    }
}