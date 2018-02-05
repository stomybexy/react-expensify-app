import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpense, editExpense, removeExpense, setExpenses, startAddExpense, startEditExpense, startRemoveExpense,
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(async () => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    await database.ref('expenses').set(expensesData)
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should remove expense from firebase and store', async () => {
    const store = createMockStore({ expenses });
    await store.dispatch(startRemoveExpense(expenses[2]));
    const expenseSnapshot = await database.ref(`expenses/${expenses[2].id}`).once('value');
    expect(expenseSnapshot.val()).toBeNull();
    const [action] = store.getActions();
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
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

test('should edit expense in firebase and store', async () => {
    const store = createMockStore({ expenses });
    const updates = { description: 'My new description' };
    const { id } = expenses[0];
    await store.dispatch(startEditExpense(id, updates));
    const [action] = store.getActions();
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });
    const expenseSnapshot = await database.ref(`expenses/${id}`).once('value');
    expect(expenseSnapshot.val().description).toEqual(updates.description);
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
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
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

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', async () => {
    const store = createMockStore({});
    await store.dispatch(startSetExpenses());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

