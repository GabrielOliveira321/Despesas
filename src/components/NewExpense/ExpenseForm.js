import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={ (e) =>  setEnteredTitle(e.target.value) } />
                </div>
                    
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={ (e) => setEnteredAmount(e.target.value) } min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={ (e) => setEnteredDate(e.target.value) } min="2023-01-01" max="2026-12-31" />
                </div>      
            </div>

            <div className="new-expense__actions">
                <button type="" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>              

        </form>
    )
}

export default ExpenseForm;