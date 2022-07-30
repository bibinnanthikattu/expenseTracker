import React from 'react'
import { ExpenseItem } from './ExpenseItem'
import './ExpenseList.css'

export const ExpenseList = (props) => {
    if (props.lists.length === 0) {
        return (
        <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    )
}

  return (
      <ul className='expenses-list'>
          {
             props.lists.map((item) => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
              )) 
        }</ul>
  )
}
