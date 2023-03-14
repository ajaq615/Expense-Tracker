import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dateFilterHandler = (event) => {
    props.onFilterYearChange(event.target.value);
    //console.log(event.target.value);
  };

  const sortExpenses = (event) => {
    props.onSortBy(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select label="Sort by:" onChange={sortExpenses} value={props.selectedSort}>
          <option value="date">Oldest-Newest</option>
          <option value="price">Cheapest-Most Expensive</option>
        </select>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateFilterHandler}>
          <option value="1">-</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
