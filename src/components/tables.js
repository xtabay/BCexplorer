import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.centered ? 'center' : 'space-between'};
    padding: 5px 0;
`;

export const Cell = styled.div`
    font-size: 18px;
    font-weight: ${props => props.big ? 'bold;' : 'normal'}
`;

export const ShowMore = styled(Link)`
    display: block;
`;