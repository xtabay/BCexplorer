import React from 'react';
import styled from 'styled-components';
import { shouldUpdate } from 'recompose';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`;

const Cell = styled.td`
    padding: 8px;
    font-size: 18px;
    border-top: 1px solid lightgray;
    word-break: break-all;
    text-align: ${props => props.right ? 'right' : 'left'}    
`;

const renderBlockInfo = block => Object.keys(block).map(key => {
    if (key === 'tx') return null;

    return (
        <tr key={key}>
            <Cell><strong>{key}</strong></Cell>
            <Cell right>{block[key].toString()}</Cell>
        </tr>
    );
});

const Wrapper = ({ block }) => {
    return (
        <div style={{ width: '100%' }}>
            <Table key="table">
                <tbody>
                    {renderBlockInfo(block)}
                </tbody>
            </Table>
        </div>
    );
};

export default shouldUpdate(() => false)(Wrapper);