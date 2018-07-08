import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import Loader from 'components/loader';

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
    width: 50%;
`;

const Input = styled.input`
    height: 40px;
    padding-left: 20px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid lightgray;
    margin-right: 10px;    
    outline: none;
    width: 60%;
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
    margin-top: 10px;
`;

const Text = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`;

const LinkId = styled(Link)`
    text-decoration: none;
`;

const Form = styled.form`
    min-width: 150px;
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

        if (isError) return <h2>Error, try another value</h2>;

        if (!entity) return null;

        const formattedTime = dayjs().from(dayjs(entity.time*1000), true);

        return (
            <React.Fragment>
                {transaction ?
                    [
                        <Text key="1">weight: {entity.weight}</Text>,
                        <Text key="2">hash: <LinkId to={`/transaction/${entity.hash}`}>{entity.hash}</LinkId></Text>
                    ] :
                    [
                        <Text key="1">height: <LinkId to={`/blocks/${entity.height}`}>{entity.height}</LinkId></Text>,
                        <Text key="2">hash: {entity.hash}</Text>
                    ]
                }
                <Text>time: {formattedTime} ago</Text>
            </React.Fragment>
        );
    }

    render() {
        const { isLoading, transaction } = this.props;

        return (
            <SearchContainer>
                <div>
                <h1>Search {transaction ? 'transaction' : 'block'}</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            placeholder={transaction ? 'Transaction hash' : 'Block height'}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button type="submit">Search</Button>
                    </Form>
                </div>
                <Content>{isLoading ? <Loader /> : this.renderItem()}</Content>
            </SearchContainer>
        );
    }
}