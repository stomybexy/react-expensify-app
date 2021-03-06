import moment from 'moment';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })

});
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set text filter action object with provided text', () => {
    const text = 'car';
    expect(setTextFilter(text)).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action object with empty string', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});