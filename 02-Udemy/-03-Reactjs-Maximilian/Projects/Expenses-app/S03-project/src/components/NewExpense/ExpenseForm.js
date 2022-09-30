import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");

    props.onSubmittedForm(expenseData);
    setCloseForm(false);
  };

  const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
  };
  const [closeForm, setCloseForm] = useState(false);

  const closeFormHandler = () => {
    setCloseForm(false);
  };
  const showFormHandler = () => {
    setCloseForm(true);
  };

  if (!closeForm) {
    return <button onClick={showFormHandler}>Add New Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeFormHandler}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
