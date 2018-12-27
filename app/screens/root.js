/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppNavigator from '../store';

class App extends PureComponent {
  componentDidMount() {
    const navState = this.props;
    console.log(navState);
  }

  render() {
    return <AppNavigator />;
  }
}

const mapStateToProps = state => {
  const { navState } = state;
  return {
    navState
  };
};

export default connect(mapStateToProps)(App);
