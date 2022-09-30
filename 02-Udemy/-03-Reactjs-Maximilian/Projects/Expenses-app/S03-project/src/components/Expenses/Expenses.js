import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [date, setDate] = useState("2020");

  const filterdExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === +date;
  });

  const filterHandler = (filteredDate) => {
    setDate(filteredDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={date} onFilter={filterHandler} />
      <ExpensesChart expenses={filterdExpenses}/>
      <ExpensesList items={filterdExpenses} />
    </Card>
  );
}

export default Expenses;
