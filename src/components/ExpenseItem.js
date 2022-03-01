import React from 'react';  // technically we don't need this now

import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>$ {props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
