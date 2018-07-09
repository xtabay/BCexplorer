import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.centered ? 'center' : 'space-between'};
    padding: 5px 0;
`;

export const Cell = styled.div`
    font-size: 18px;
    font-weight: ${props => props.big ? 'bold;' : 'normal'};
    word-break: ${props => props.hash ? 'break-all' : 'inherit'};
    word-wrap: unset;
    word-break: unset;
    min-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    &:not(:last-child) { margin-right: 5px; };
`;

export const ShowMore = styled(Link)`
    display: block;
    line-height: 40px;
    width: 120px;
    text-align: center;
    height: 40px;
    background-color: royalblue;
    text-decoration: none;
    color: white;
    border-radius: 9px;
`;