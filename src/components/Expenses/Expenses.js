import React, {useState} from "react";

import "./Expenses.css";
import Card from "../Ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filterredYear, setFilterredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilterredYear(selectedYear);
    }

    const filterredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterredYear; 
    })

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filterredExpenses} />
                <ExpensesList items={filterredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;