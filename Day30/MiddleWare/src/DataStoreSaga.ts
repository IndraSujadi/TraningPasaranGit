import { applyMiddleware, createStore } from "redux";
import { isCallChain } from "typescript";
import createSagaMiddleware from "redux-saga";
import { RootDataStore, Transaction, Action } from "./type";

let sagaMiddleware = createSagaMiddleware();

// bisa applyMiddleware(functiona, functionb, functionc)
let store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loginSaga, loginSaga2);

function* loginSaga2() {}

// ini middleware
function fetchStuffMiddleware({ dispatch }) {
  return (next: any) => (action: any) => {
    if (action.type === "FETCH_FRIENDS") {
      fetchFriends(action.userId, dispatch);
    } else {
      next(action);
    }
  };
}

// IMPORTANT NOTE JANGAN GUNAKAN CALL DENGAN DISPATCH call(dispatch,..)
// KALAU MAU DISPATCH PAKAI PUT

// saga mirip generator
function* loginSaga() {
  // 1. wait for user to enter their details and press 'login'
  // 2. send Details to server, and wait for reply
  // 3. if server says failure, show a notification and go to step 1
  // 4. success, update dataStore (by dispatching an action)
  // 5. wait for logout action
  // 6. invalidate/ delete teh session token
  // 7. go to step 1
  while (true) {
    let { username, password } = yield take("LOGIN_SUBMITTED");
    // let { username, password } = yield waitUserToLogin();
    let { isSuccess, authToken } = yield call(
      fetchFromServer,
      username,
      password
    );
    // let { isSuccess, authToken } = yield fetchFromServer(username, password);
    if (isSuccess) {
      // call (namafungsi, argumentnya)
      yield put({ type: "LOGIN_SUCCESS", authToken }); // kalau ini kita gk jalanin disini. tapi jalanin di tempat lain
      // dispatch({ type: "LOGIN_SUCCESS", authToken }); // kalau kita panggil dispatch() berarti kita jalanin disini (side effect)
      yield take("LOGOUT"); // take itu wait for redux action, jadi kaluini nunggu sampe logout action baru kita lanjutkan
      yield put({ type: "LOGOUT" });
      // dispatchEvent({ type: "LOGOUT" });
    }
  }
}

async function fetchFriends(userID: string, dispatch: any) {
  let url = `/api/users/${userID}/friends`;
  dispatch({ type: "LOADING_STARTED" });
  let response = await fetch(url);
  let data = await response.json();
  dispatch({ type: "LOADING_ENDED" });
  dispatch({
    type: "FRIENDS_RECEIVED",
    friends: data.friends,
  });
}

function reducer(state: RootDataStore, action: Action) {
  switch (action.type) {
    case "CREATE_ACCOUNT": {
    }
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

export default store;
