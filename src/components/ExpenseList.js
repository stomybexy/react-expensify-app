import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div>
                    <span className="list-item list-item--message">No expenses</span>
                </div>
            ) : (
                props.expenses.map(expense => (
                    <ExpenseListItem key={expense.id} {...expense}/>
                ))
            )
        }
        </div>

    </div>
);

const mapStateToProps = ({ expenses, filters }) => ( {
    expenses: getVisibleExpenses(expenses, filters)
} );

export default connect(mapStateToProps)(ExpenseList);
