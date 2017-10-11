
import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const total = numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00');
    const count = props.expenses.length;
    return (
        <div>
            <h1>Viewing {count} expense{count === 1 ? '' : 's'} totalling {total}</h1>
        </div>
    )
};

const mapStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filters)
    });

export default connect(mapStateToProps)(ExpensesSummary);