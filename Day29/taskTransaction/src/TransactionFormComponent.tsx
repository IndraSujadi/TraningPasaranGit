import React from "react";
import { Transaction } from "./type";

type Props = {
  balance: number;
  transaction: Array<Transaction>;
  increaseBalance: (transaction: Transaction) => void;
  decreaseBalance: (transaction: Transaction) => void;
};

export default function TransactionForm(props: Props) {
  let state = {
    type: "",
    amount: 0,
    notes: "",
    date: "",
  };

  let typeChange = (event: any) => {
    state = { ...state, type: event.target.value };
    console.log(event.target.value);
  };

  let changeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    let date = new Date().toISOString();
    state = { ...state, amount: Number(event.target.value), date: date };
    console.log(state);
  };

  let changeNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    state = { ...state, notes: event.target.value };
    console.log(state);
  };

  let processTransaction = () => {
    if (state.type === "CREDIT") {
      props.increaseBalance({
        type: "CREDIT",
        amount: state.amount,
        notes: state.notes,
        date: state.date,
      });
    } else if (state.type === "DEBIT") {
      props.decreaseBalance({
        type: "DEBIT",
        amount: state.amount,
        notes: state.notes,
        date: state.date,
      });
    } else {
      state = state;
    }
  };
  return (
    <div>
      <p>Balance : {props.balance}</p>
      <form>
        <label>Choose a Transaction:</label>
        <div onChange={typeChange}>
          <input type="radio" value="CREDIT" name="type" /> Deposit
          <input type="radio" value="DEBIT" name="type" /> Transfer
        </div>
        <br />
        <input type="number" placeholder="amount" onChange={changeAmount} />
        <br />
        <input type="text" placeholder="note" onChange={changeNotes} />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            processTransaction();
          }}
        >
          Process Transaction
        </button>
      </form>
      {console.log(props.transaction)}
    </div>
  );
}
