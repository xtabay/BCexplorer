import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

import rootReducer from 'reducers';

import Routes from './routes';

dayjs.extend(relativeTime)

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
);