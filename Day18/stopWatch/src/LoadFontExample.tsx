import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {};
type State = {
  fontsLoaded: boolean;
};

export default class App extends Component<Props, State> {
  state = {
    fontsLoaded: false,
  };
  _timeout: any = null;

  render() {
    if (this.state.fontsLoaded === false) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ fontFamily: 'open-sans' }}>Hello</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
