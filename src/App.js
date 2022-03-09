import React from 'react'; // technically we don't need this now

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// function App() {   // -> Alternative syntax
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense);
  }

  // // !!! Alternative to the JSX code below: !!!
  // // React.createElement('type of element', {attributes}, content)
  // return React.createElement(
  //   'div', // === <div></div>  -> that's why we need wrapping <div> in JSX code
  //   {}, // === attributes
  //   React.createElement('h2', {}, "Let's get started!"), // === <h2>Let's get started!</h2>
  //   React.createElement(Expenses, { items: expenses }) // === <Expenses items={expenses} />
  // );

  return (
    // This code is called JSX
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
