import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("1");
  const [sortByValue, setSortByValue] = useState("date");

  const yearFilterChangeHandler = (selectYear) => {
    //console.log(selectYear);
    setFilterYear(selectYear);
  };

  const sortExpensesHandler = (sortValue) => {
    setSortByValue(sortValue)
    //console.log(sortedItems)
  }

  // const sortFunction = (expenseItems) => {
  //   return expenseItems.sort((a, b) => a.amount > b.amount)
  // }

  const sort = (items, sortBy) => {
    if (sortBy==='price') {
      return items.sort((a,b) => a.amount - b.amount)
    } else if (sortBy==='date') {
      return items.sort((a,b) => a.date - b.date)
    }
  }

  const sortedItems = sort(props.items, sortByValue);
  
  const filteredYear = sortedItems.filter((expense) => {
    //console.log('this', expense.date.getFullYear())
    if(filterYear==='1') {
      return expense
    } else {
      const expenseModified = expense.date.getFullYear().toString() === filterYear;
      return expenseModified
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYearChange={yearFilterChangeHandler}
          onSortBy={sortExpensesHandler}
          selectedSort={sortByValue}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;
