import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmButton from './ConfirmButton';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemoveButtonClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <ConfirmButton
                        className="button button--secondary"
                        onConfirm={this.onRemoveButtonClick}
                        confirmTitle="Confirm removal"
                        confirmMessage="Remove this expense ?"
                    >
                        Remove Expense
                    </ConfirmButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ expenses }, props) => ( {
    expense: expenses.find(({ id }) => id === props.match.params.id)
} );

const mapDispatchToProps = (dispatch) => ( {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
} );

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
