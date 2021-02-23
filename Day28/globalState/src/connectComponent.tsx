//connect data store dengan [ure stateless compponent

function connectComponent(dataStore: any, BaseComponent: any) {
  class ConnectedComponent extends React.Component {
    // ini yang dipakai everywhere (for production)
    render() {
      let { value } = dataStore.getValue();
      let setValue = (newValue: string) => dataStore.setState({ value: newValue });
      return <BaseComponent value={value} setValue={setValue} />;
    }
  }
  return ConnectedComponent;
}

// lebih baik kalau pake globalstate itu jangan mutable
