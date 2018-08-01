import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import BudgetScreen from './screens/BudgetScreen';

export default class App extends React.Component {
  render() {
    return (
      <BudgetScreen/>
    );
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
