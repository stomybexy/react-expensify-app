import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary correctly with 1 visible expense and 1 hidden expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={9434} hiddenExpensesCount={1}/>);
    expect(wrapper).toMatchSnapshot()
});
test('should render ExpenseSummary correctly with 1 visible expense and multiple hidden expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={9434} hiddenExpensesCount={5}/>);
    expect(wrapper).toMatchSnapshot()
});
test('should render ExpenseSummary correctly with multiple visible expenses and 1 hidden expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={2} expensesTotal={9434} hiddenExpensesCount={1}/>);
    expect(wrapper).toMatchSnapshot()
});
test('should render ExpenseSummary correctly with multiple visible expenses and multiple hidden expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={19845} hiddenExpensesCount={10}/>);
    expect(wrapper).toMatchSnapshot()
});

