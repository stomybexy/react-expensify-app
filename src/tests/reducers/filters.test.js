import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should text filter', () => {
    const text = 'filter by this';
     const state = filtersReducer(undefined, {
         type: 'SET_TEXT_FILTER',
         text
     });
     expect(state.text).toBe(text);
});
test('should set startDate filter', () => {
    const date = moment(0).add(2, 'days');
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date
    });
    expect(state.startDate).toEqual(date);
});
test('should set endDate filter', () => {
    const date = moment(0).subtract(5, 'days');
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date
    });
    expect(state.endDate).toEqual(date);
});