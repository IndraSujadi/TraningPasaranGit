import { connect } from "react-redux";
import { reduceEachLeadingCommentRange } from "typescript";
import { RootDataStore, Transaction, Action } from "./type";
import TransactionForm from "./TransactionFormComponent";
import HistoryList from "./HistoryComponent";

let mapStateToProps = (state: RootDataStore) => {
  return {
    balance: state.balance,
    transaction: state.transaction,
  };
};

let mapDispatchToProps = (dispatch: (action: Action) => void) => {
  return {
    increaseBalance: (transaction: Transaction) => {
      let trxDate = new Date().toISOString();
      dispatch({
        type: "CREDIT",
        payload: {
          type: transaction.type,
          amount: transaction.amount,
          notes: transaction.notes,
          date: trxDate,
        },
      });
    },
    decreaseBalance: (transaction: Transaction) => {
      let trxDate = new Date().toISOString();
      dispatch({
        type: "DEBIT",
        payload: {
          type: transaction.type,
          amount: transaction.amount,
          notes: transaction.notes,
          date: trxDate,
        },
      });
    },
  };
};

let ContainerForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionForm);

export let ContainerHistory = connect(mapStateToProps)(HistoryList);

export default ContainerForm;
