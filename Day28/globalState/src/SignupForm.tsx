import React, { Component } from 'react';
// import dataStore from './src/dataStore';

type Props = {};

type State = { value: string };

// ini sulit untuk di test
// class SignUpdFormStateFull extends Component<Props> {
//   componentDidMount() {
//     dataStore.on('change', () => this.forceUpdate());
//   }

//   render() {
//     let state = dataStore.getState();
//     return (
//       <div>
//         <SignUpdFormStateLess value={state.value} />
//         <button onClick={() => dataStore.set({ signupFormValue: '' })}>Clear</button>
//       </div>
//     );
//   }
// }

// agar testing lebih mugah maka dibuat stateles functionnya
type Propss = {
  value: string;
  setValue: (newValue: string) => undefined;
};
function SignUpdFormStateLess(props: Propss) {
  return (
    <div>
      <input type='text' onChange={event => props.setValue(event.target.value)} value={props.value} />
      <button onClick={() => props.setValue('')}>Clear</button>
    </div>
  );
}

export default connectComponent(dataStore, SignUpdFormStateLess);
