import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot()
});
test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={19845}/>);
    expect(wrapper).toMatchSnapshot()
});

