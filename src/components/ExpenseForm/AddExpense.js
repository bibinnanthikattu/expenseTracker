import React from 'react'
import './AddExpense.css'
import { ExpenseForm } from './ExpenseForm'


export const AddExpense = (props) => {
  const getUserExpense = (enteredData) => {
  // console.log(enteredData);
    props.getUserExpenseData(enteredData)
}

  return (
    <div className='new-expense '>
      <ExpenseForm onSubmitExpense={getUserExpense} />
    </div>
  )
}
