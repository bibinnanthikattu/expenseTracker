import { useState } from "react";
import { AddExpense } from "./components/ExpenseForm/AddExpense";
import { Expenses } from "./components/ExpenseList/Expenses";


const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
 
];
function App() {
  const [expenseDatas, setExpenseDatas]=useState(dummyData)

  const handleUserExpenseData = (expenseData) => {
    setExpenseDatas((prevstate) => {
      return [...prevstate, expenseData]
    })
  }
  return (
    <div className="App">
      <AddExpense getUserExpenseData={handleUserExpenseData} />
      <Expenses items={expenseDatas} />
    </div>
  );
}

export default App;
