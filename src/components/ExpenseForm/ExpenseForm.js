import React, { useState } from 'react';
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [userTitle, setUserTitle] = useState('');
    const [userAmount, setUserAmount] = useState('');
    const [userDate, setUserDate] = useState('');

    const handleUserTitle = (e) => {
        setUserTitle(e.target.value);
    };
    const handleUserAmount = (e) => {
        setUserAmount(e.target.value)
    };
    const handleUserDate = (e) => {
        setUserDate(e.target.value)
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userTitle,
            amount: userAmount,
            date: new Date(userDate)
        };
        // console.log(expenseData);
        props.onSubmitExpense(expenseData);
        setUserTitle('');
        setUserAmount('');
        setUserDate('');
  }


  return (
      <form onSubmit={handleFormSubmission}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label htmlFor="">Title</label>
                  <input type="text" value={userTitle} onChange={handleUserTitle} />
              </div>
              <div className='new-expense__control'>
                  <label htmlFor="">Amount</label>
                  <input type="number" min='0.01' set='0.99' value={userAmount} onChange={handleUserAmount} />
              </div>
              <div className='new-expense__control'>
                  <label htmlFor="">Date</label>
                  <input type="date" min='2019-01-31' max='2022-12-31' value={userDate} onChange={handleUserDate} />
              </div>
              <div className='new-expense__actions'>
                  <button>Add</button>
              </div>
          </div>
    </form>
  )
}
