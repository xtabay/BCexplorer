import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { createBrowserHistory } from 'history';

import Main from 'pages/main';
import Block from 'pages/block';
import BlockList from 'pages/blockList';
import Transaction from 'pages/transactions';
import Graphics from 'pages/graphics';

const Container = styled.div`
    padding: 10px 10%;    
`;

export default () => (
    <BrowserRouter>
        <Container>
            <Switch>
                <Route exact path ="/" component={Main} />
                <Route exact path ="/blocks" component={BlockList} />
                <Route exact path ="/blocks/:id" component={Block} />
                <Route exact path ="/transactions/:id" component={Transaction} />
                <Route exact path ="/graphics" component={Graphics} />
                <Route component={() => <div>Oops 404</div>} />
            </Switch>
        </Container>
    </BrowserRouter>
);

