import React from 'react';

const ExpenseEditExpensePage = (props) => {
        console.log(props);
        return (
        <div>
            Editing the expense id of {props.match.params.id}
        </div>
    );
}

export default ExpenseEditExpensePage;