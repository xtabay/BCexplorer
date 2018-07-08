import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import Loader from 'components/loader';
import Pagination from 'components/pagination';

const Block = styled.div`
    height: 150px;
    border-radius: 4px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    padding: 20px;
`;

const BlockHeader = styled(Link)`
    display: block;
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;    
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;
`;

const Chain = styled.div`
    height: 50px;
    width: 50px;
    margin-right: 10%;
    background-color: ${props => props.main ? 'lightgreen' : 'lightblue'};
`;

const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 30px;
`;

const SubInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Text = styled.div`
    word-break: break-all;
`;

const LIMIT = 7;

export default class List extends React.PureComponent {
    handleChangePagination = offset => this.props.history.push({search: `offset=${offset}`});

    renderItem({ height, hash, main_chain, time }) {
        return (
            <Block key={height}>
                <BlockHeader to={`/blocks/${height}`}>{height}</BlockHeader>
                <Info>
                    <Chain title={main_chain ? 'Main chain' : 'Sub chain'} main={main_chain} />
                    <SubInfo>
                        <Text>Hash: {hash}</Text>
                        <Text>Time: {dayjs().from(dayjs(time*1000), true)} ago</Text>
                    </SubInfo>
                </Info>
            </Block>
        );
    }

    renderContent() {
        const { values, isError, isLoading, offset } = this.props;

        if (isError) return <h2>Произошла ошибка, попробуйте обновить страницу</h2>;

        if (values === null || isLoading) return <Loader />;

        return (
            <React.Fragment>
                {values.slice(offset, offset + LIMIT).map(block => this.renderItem(block))}
                <Pagination
                    max={values.length}
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
                <h1>Blocks List</h1>
                {this.renderContent()}
            </div>
        );
    }
}