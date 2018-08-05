import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import BudgetScreen from './screens/BudgetScreen';
import AddSheetScreen from './screens/AddSheetScreen';
//import SettingScreen from './screens/SettingScreen';

export default class App extends React.Component {
  render() {
  	const MainNavigator = createStackNavigator({
    	budget:  { screen: BudgetScreen },
  		add: { screen: AddSheetScreen },
  		//setting: { screen: SettingScreen }
    },
    {
	    headerMode: 'none',
	    navigationOptions: {
	      headerVisible: false,
	    }
	  }
    );


    return (
    	<Provider store={store}>
      	<MainNavigator style={styles.container} />
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
