import React, { useState } from 'react'; // technically we don't need this now

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // .filter() returns new Array, doesn't edit the original Array
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // we can store JSX code in variables:
  let expensesContent = <p>No Expenses Found!</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* OPTION 1: */}
        {/* {filteredExpenses.length === 0 
          ? <p>No Expenses Found!</p>
          : filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        ))} */}

        {/* OPTION 2: */}
        {/* && returns the 2nd if the 1st is "true" */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))
        } */}

        {/* OPTION 3: */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
