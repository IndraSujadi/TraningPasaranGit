import React from "react";
import { Transaction } from "./type";

type Props = {
  balance: number;
  transaction: Array<Transaction>;
};

export default function HistoryList(props: Props) {
  return (
    <div>
      Transaction Hitory : <br />
      <ul>
        {props.transaction.map((item, i) => {
          return (
            <li key={i}>
              {item.date} :
              <ul>
                <li>{item.type}</li>
                <li>{item.amount}</li>
                <li>{item.notes}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
