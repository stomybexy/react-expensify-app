import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount <= 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return expensesCount > 0 ? (
        <p>
            Viewing {expensesCount} {expenseWord} totaling {formattedExpensesTotal}
        </p>
    ) : (
        <p>No expense to view.</p>
    );
};
const mapStateToProps = ({ expenses, filters }) => {

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
};
export default connect(mapStateToProps)(ExpenseSummary);