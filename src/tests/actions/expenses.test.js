import moment from 'moment';
import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit action object', () => {
    const action = editExpense('123bcf', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123bcf',
        updates: {note: 'New note value'}
    })
});

test('should setup add action object with provided values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add action object with default values', () => {
    const defaultExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...defaultExpense
        }
    })

});

