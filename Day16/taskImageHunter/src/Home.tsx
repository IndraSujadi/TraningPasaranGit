import React, {Component} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  navigation: any;
};

class Home extends Component<Props> {
  onPressSearch = () => {
    this.props.navigation.navigate('Search');
  };

  onPressFav = () => {
    this.props.navigation.navigate('Favorite');
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Search Images" onPress={this.onPressSearch} />
        <Button title="Favorites" onPress={this.onPressFav} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Home;
