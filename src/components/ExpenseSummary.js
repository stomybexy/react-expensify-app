import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseSummary = ({ expensesCount, expensesTotal, hiddenExpensesCount }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenseWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span>
                </h1>
                {!!hiddenExpensesCount && (
                    <h3 className="page-header__subtitle">{hiddenExpensesCount} hidden {hiddenExpenseWord} because of filters</h3>
                )}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ({ expenses, filters }) => {

    const visibleExpenses = getVisibleExpenses(expenses, filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
        hiddenExpensesCount: expenses.length - visibleExpenses.length
    }
};
export default connect(mapStateToProps)(ExpenseSummary);