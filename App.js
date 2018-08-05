import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import BudgetScreen from './screens/BudgetScreen';

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      	<BudgetScreen style={styles.container} />
      </Provider>
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
