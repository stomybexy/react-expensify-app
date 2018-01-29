import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map(expense => (
                    <ExpenseListItem key={expense.id} {...expense}/>
                ))
            )
        }

    </div>
);

const mapStateToProps = ({expenses, filters}) => ({
    expenses: getVisibleExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);
