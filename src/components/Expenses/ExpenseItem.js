import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const click = (event) => {
    prompt(`${props.title}: Are you sure you want to delete?`)
  }
  return (
    <li>
      <Card className="expense-item" onCLick={click}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₱{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
