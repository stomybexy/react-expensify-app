import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const {expenses, filters} = store.getState();
    console.log(getVisibleExpenses(expenses, filters));
});

store.dispatch(addExpense({description: 'Water Bill', createdAt: 300}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 200}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
