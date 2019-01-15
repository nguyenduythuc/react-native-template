/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default class Auth extends PureComponent {
  componentDidMount() {
    const navState = this.props;
    /* eslint-disable no-console */
    console.log(navState);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Auth screen!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}>
          <Text>{'Home >'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
