import React, { useState } from 'react';
import './Expenses.css'
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { ExpenseList } from './ExpenseList';


export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const handleSelectedYear = (filteredYear) => {
    setSelectedYear(filteredYear);
  }
  const onSelectedYearItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear
  });
  // console.log(onSelectedYearItems);
  return (
    <li>
    <Card className='expenses'>
      <ExpensesFilter handleSelectedYear={handleSelectedYear} selectedYear={selectedYear} />
      <ExpenseList lists={onSelectedYearItems} /> 
      </Card>
      </li>
  )
}
