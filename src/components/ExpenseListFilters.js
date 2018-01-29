import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';


export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = calendarFocused => this.setState({calendarFocused});

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = ({target}) => {
        const sortBy = target.value;
        if (sortBy === 'date') {
            this.props.sortByDate();
        } else if (sortBy === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    showClearDates={true}
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

            </div>
        );
    }
}


const mapStateToProps = ({filters}) => ({filters});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);