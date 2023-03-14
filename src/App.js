import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Headphones",
    amount: 5699,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: "Mechanical Keyboard",
    amount: 2500,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: "XL Mouse Pad",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: "Guitar",
    amount: 12999,
    date: new Date(2021, 6, 15),
  },
  {
    id: 'e6',
    title: "Guitar Strings",
    amount: 700,
    date: new Date(2021, 6, 28),
  },
  {
    id: 'e7',
    title: "Guitar Amp",
    amount: 25000,
    date: new Date(2021, 3, 8),
  },
  {
    id: 'e8',
    title: "Sofa Bed",
    amount: 11000,
    date: new Date(2019, 6, 23),
  },
  {
    id: 'e9',
    title: "Stethoscope",
    amount: 7000,
    date: new Date(2019, 9, 28),
  },
  {
    id: 'e10',
    title: "Audio Interface",
    amount: 13500,
    date: new Date(2019, 5, 22),
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    //console.log(expense);
  };

  return (
    <Card className="card">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
