import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Arrow = styled.div`
    display: inline-block;
    background-color: lightblue;
    font-size: 40px;
    width: 70px;
    height: 50px;
    border-radius: 6px;
    cursor: pointer;
    
    &:not(:first-child) {
        margin-left: 30px;
    }
`;

export default class Pagination extends React.PureComponent {
    handleGoPrev = () => {
        const { offset, limit, onChange } = this.props;
        const newOffset = offset - limit;

        onChange(newOffset > 0 ? newOffset : 0);
    };

    render() {
        const { offset, limit, max, onChange } = this.props;
        const offsetSum = offset + limit;

        return (
            <Container>
                {(offset > 0) && <Arrow onClick={this.handleGoPrev}>&lArr;</Arrow>}
                {(offsetSum < max) &&<Arrow onClick={() => onChange(offsetSum)}>&rArr;</Arrow>}
            </Container>
        );
    }
}