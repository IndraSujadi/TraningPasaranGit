import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

type Props = {};

export default class Favorite extends Component<Props> {
  static contextTypes = {
    fav: PropTypes.object,
    unlike: PropTypes.func,
  };

  unlike = (unFavImg) => {
    this.context.unlike(unFavImg);
    this.setState({});
  };

  render() {
    let fav = this.context.fav;
    let arr = [];
    fav.forEach((key) => {
      arr.push(key);
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Favorite Image</Text>
        <ScrollView style={{borderWidth: 1, padding: 1}}>
          {arr.map((imgUrl, i) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  this.unlike(arr[i]);
                }}
                key={i}
              >
                <View style={styles.imageContainer}>
                  <Image source={{uri: imgUrl}} style={styles.image} />
                  <View style={styles.favorite} />
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    alignSelf: 'stretch',
    fontSize: 30,
    color: 'blue',
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    width: 150,
    height: 150,
    margin: 2,
  },
  favorite: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'red',
  },
});
