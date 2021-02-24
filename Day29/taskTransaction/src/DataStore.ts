import { createStore } from "redux";

import { RootDataStore, Transaction, Action } from "./type";

function reducer(
  state: RootDataStore = {
    balance: 500,
    transaction: [],
  },
  action: Action
) {
  switch (action.type) {
    case "CREDIT": {
      let newBalance = state.balance + action.payload.amount;
      let newTransaction = action.payload;
      let newState = {
        balance: newBalance,
        transaction: [...state.transaction, newTransaction],
      };
      return newState;
    }
    case "DEBIT": {
      let newBalance = state.balance - action.payload.amount;
      let newTransaction = action.payload;
      let newState = {
        balance: newBalance,
        transaction: [...state.transaction, newTransaction],
      };
      return newState;
    }
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
