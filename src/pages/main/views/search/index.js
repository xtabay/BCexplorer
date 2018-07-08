import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Loader from 'components/loader';
import blockEntity from "../../../../reducers/blockEntity";

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px
`;

const Content = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Input = styled.input`
    height: 40px;
    padding-left: 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid lightgray;
    margin-right: 10px;    
    outline: none;
`;

const Button = styled.button`
    height: 40px;
    font-size: 16px;
    width: auto;
    background-color: dodgerBlue;
    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`;

export default class Blocks extends React.PureComponent {
    state = { value: '' };

    handleChange = ({ target: { value } }) => this.setState({ value });

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.value) return;

        this.props.onSearch(this.state.value);
    };

    renderItem() {
        const { entity, isError, transaction } = this.props;

        if (isError) return <h2>Block not found, try valid value</h2>;

        if (!entity) return null;

        const formattedTime = dayjs().from(dayjs(entity.time*1000), true);

        return (
            <React.Fragment>
                {transaction ?
                    [
                        <div key="1">weight: {entity.weight}</div>,
                        <div key="2">hash: <Link to={`/transactions/${entity.hash}`}>{entity.hash}</Link></div>
                    ] :
                    [
                        <div key="1">height: <Link to={`/blocks/${entity.height}`}>{entity.height}</Link></div>,
                        <div key="2">hash: {entity.hash}</div>
                    ]
                }
                <div>time: {formattedTime} ago</div>
            </React.Fragment>
        );
    }

    render() {
        const { isLoading, transaction } = this.props;

        return (
            <SearchContainer>
                <div>
                <h1>Search {transaction ? 'transaction' : 'block'}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            placeholder={transaction ? 'Transaction hash' : 'Block height'}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button type="submit">Search</Button>
                    </form>
                </div>
                <Content>{isLoading ? <Loader /> : this.renderItem()}</Content>
            </SearchContainer>
        );
    }
}