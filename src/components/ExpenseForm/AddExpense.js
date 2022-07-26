import React from 'react'
import './AddExpense.css'
import { ExpenseForm } from './ExpenseForm'


export const AddExpense = () => {
  return (
    <div className='new-expense '>
      <ExpenseForm/>
    </div>
  )
}
