import React, { Component } from "react";
import ContainerForm, { ContainerHistory } from "./ComponentContainer";

type Props = {};

// type untuk newContact

// contoh class untuk localstate
class App extends Component<Props> {
  render() {
    return (
      <div>
        <ContainerForm />
        <ContainerHistory />
      </div>
    );
  }
}

export default App;
