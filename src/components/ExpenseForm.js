import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        let state = {
            description: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calendarFocused: false,
            error: ''
        };
        if (props.expense) {
            state = {
                ...state,
                description: props.expense.description,
                note: props.expense.note,
                amount: (props.expense.amount / 100).toString(),
                createdAt: moment(props.expense.createdAt),
            }
        }
        this.state = state;
    }

    onDescriptionChange = ({target}) => this.setState(() => ({description: target.value}));

    onNoteChange = ({target}) => this.setState(() => ({note: target.value}));

    onAmountChange = ({target}) => {
        const amount = target.value;

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));
        }
    };

    onCalendarFocusChange = ({focused}) => this.setState({calendarFocused: focused});

    onSubmit = (e) => {
        e.preventDefault();

        const {description, amount, createdAt, note} = this.state;

        if (!description || !amount) {
            const error = 'Please provide description and amount.';
            this.setState(() => ({error}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description,
                amount: parseFloat(amount) * 100,
                createdAt: createdAt.valueOf(),
                note
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}