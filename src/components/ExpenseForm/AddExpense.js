import React, { useState } from 'react'
import './AddExpense.css'
import { ExpenseForm } from './ExpenseForm'


export const AddExpense = (props) => {
  const [isForm, setIsForm] = useState(false);
  const getUserExpense = (enteredData) => {
  // console.log(enteredData);
    props.getUserExpenseData(enteredData)
  }
  const HandleExpenseForm = () => {
  setIsForm(true)
  }
  const handleFormCancel = () => {
    setIsForm(false)
  }

  return (
    <div className='new-expense '>
      {!isForm && <button onClick={HandleExpenseForm}>Add Expense</button>}
      {isForm && <ExpenseForm onSubmitExpense={getUserExpense} handleFormCancel={handleFormCancel} />}
    </div>
  )
}
