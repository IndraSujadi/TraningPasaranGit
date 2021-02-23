//How redux work
type State = { balance: number };

type Action = {
  type: 'DEPOSIT' | 'PURCHASE';
  amount: number;
};

function createDataStore() {
  let state: State = { balance: 0 };

  return {
    getState: () => state,
    dispatch: (action: Action) => {
      state = reducer(state, action);
    },
  };
}

function reducer(oldState: State, action: Action): State {
  switch (action.type) {
    case 'PURCHASE': {
      return { balance: oldState.balance - action.amount };
    }
    case 'DEPOSIT': {
      return { balance: oldState.balance + action.amount };
    }
    default: {
      return oldState;
    }
  }
}

let dataStore = createDataStore();

dataStore.dispatch({ type: 'DEPOSIT', amount: 20 });

// let { accountType } = dataStore.getState();
