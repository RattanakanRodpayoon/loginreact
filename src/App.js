console.log('app component is working.');
import React, { Component } from 'react';
import { Text , View } from 'react-native';
//import Navbar from './component/navbar';
import LoginPage from './component/pages/LoginPage';

export default class App extends Component {
  componentDidMount() {
    console.log('componentDidMount()');
  }
  componentWillMount() {
    console.log('componentWillMount()');
  }
  render() {
    console.log('render()');
    return (
      <View>
        <LoginPage />
      </View>
      );
    }
}
