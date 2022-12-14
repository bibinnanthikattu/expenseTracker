import React from 'react'
import { Card } from '../UI/Card'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

export const ExpenseItem = (props) => {
    // console.log(props.date);
    // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>$ {props.amount}</div>
          </div>
    </Card>
  )
}
