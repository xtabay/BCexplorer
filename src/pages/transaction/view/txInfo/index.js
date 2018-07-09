import React from 'react';
import styled from 'styled-components';

import Loader from 'components/loader';

const Header = styled.h1`
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    ${props => props.padded ? 'margin-top: 50px;' : ''}
`;

const Cell = styled.td`
    padding: 8px;
    font-size: 18px;
    border-top: 1px solid lightgray;
    text-align: ${props => props.right ? 'right' : 'left'};    
     ${props => props.break ? 'word-break: break-all;' : ''}
`;

const Secondary = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Container = styled.div`
    text-align: center;
    width: 45%;
    min-width: 300px;
`;

const EXCLUDE_KEYS = ['inputs', 'out'];

export default class BlockTx extends React.PureComponent {
    renderOuts = (outs) => outs.map((out, ind) => (
        <Table padded key={ind}>
            <tbody>
                {this.renderTxInfo(out)}
            </tbody>
        </Table>
    ));

    renderTxInfo = transaction => Object.keys(transaction).map(key => {
        if (EXCLUDE_KEYS.includes(key)) return null;

        if (key === 'prev_out') {
            return (
                <tr key={key}>
                    <Cell><strong>{key} addr</strong></Cell>
                    <Cell right break>{transaction[key].addr}</Cell>
                </tr>
            );
        }

        return (
            <tr key={key}>
                <Cell><strong>{key}</strong></Cell>
                <Cell right break>{transaction[key].toString()}</Cell>
            </tr>
        );
    });

    renderContent() {
        const { transaction, isLoading, isError } = this.props;


        if (isError) return <h2>Oops, something went wrong</h2>;

        if (!transaction || isLoading) return <Loader />;

        return (
            <React.Fragment>
                <Table key="summary">
                    <tbody>
                    {this.renderTxInfo(transaction)}
                    </tbody>
                </Table>
                <Secondary key="other">
                    <Container>
                        <h2>Inputs</h2>
                        {this.renderOuts(transaction.inputs)}
                    </Container>
                    <Container>
                        <h2>Out</h2>
                        {this.renderOuts(transaction.out)}
                    </Container>
                </Secondary>
            </React.Fragment>
        );
    }

    render() {
        const { hash } = this.props;

        return (
            <div>
                <Header>Transaction #{hash}</Header>
                <h2>Summary</h2>
                {this.renderContent()}
            </div>
        );
    }
}