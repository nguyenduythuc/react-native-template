/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import OAuthManager from 'react-native-oauth';

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

export default class Home extends PureComponent {
  componentDidMount() {
    const navState = this.props;
    /* eslint-disable no-console */
    console.log(navState);
    const manager = new OAuthManager('CoXplore');
    manager.configure({
      facebook: {
        client_id: '441558422677774',
        client_secret: '2ad2a946045b16abd7d84b0200ee2174'
      }
    });
    manager.deauthorize('facebook');
    manager
      .authorize('facebook', {
        scopes: 'email'
      })
      .then(resp => this.getUserData(resp))
      .catch(err => console.log(err));
  }

  getUserData(data) {
    this.a = 'hello';
    const url = `https://graph.facebook.com/v2.5/me?fields=email&access_token=${
      data.response.credentials.authorizationHeader
    }`;
    console.log(url);
    /* eslint-disable no-undef */
    fetch(url)
      .then(response => response.json())
      .then(json => {
        // Some user object has been set up somewhere, build that user here
        console.log(json);
      })
      .catch(e => {
        console.log('ERROR GETTING DATA FROM FACEBOOK', e);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to Home screen!</Text>
        <Text style={styles.instructions}> To get started, edit App.js </Text>
        <Text style={styles.instructions}> {instructions} </Text>
      </View>
    );
  }
}
