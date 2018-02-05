import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit action object', () => {
    const action = editExpense('123bcf', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123bcf',
        updates: { note: 'New note value' }
    })
});

test('should setup add action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', async () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    await store.dispatch(startAddExpense(expenseData));
    const [action] = store.getActions();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
    const snapshot = await database.ref(`expenses/${action.expense.id}`).once('value');
    expect(snapshot.val()).toEqual(expenseData);
});

test('should add expense with defaults to database and store', async () => {
    const store = createMockStore({});
    const defaultData = {
        description :'',
        note :'',
        amount : 0,
        createdAt : 0
    };

    await store.dispatch(startAddExpense());
    const [action] = store.getActions();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...defaultData
        }
    });
    const snapshot = await database.ref(`expenses/${action.expense.id}`).once('value');
    expect(snapshot.val()).toEqual(defaultData);
});

// test('should setup add action object with default values', () => {
//     const defaultExpense = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             ...defaultExpense
//         }
//     })
//
// });

