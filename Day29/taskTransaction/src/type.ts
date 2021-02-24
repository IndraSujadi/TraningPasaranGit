export type RootDataStore = {
  balance: number;
  transaction: Array<Transaction>;
};

export type Transaction = {
  amount: number;
  type: "CREDIT" | "DEBIT";
  notes: string;
  date: string;
};

export type Action = { type: "DEBIT" | "CREDIT"; payload: Transaction };
