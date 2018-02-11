import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper, expense;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    expense = expenses[1];
    wrapper = shallow(
        <EditExpensePage
            expense={expense}
            startEditExpense={startEditExpense}
            history={history}
            startRemoveExpense={startRemoveExpense}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({
        ...expense,
        id: undefined
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, {
        ...expense,
        id: undefined
    });
});

test('should handle removeExpense', () => {
    wrapper.find('ConfirmButton').props().onConfirm();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id})
});
