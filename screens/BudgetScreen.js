import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import BudgetList from '../components/BudgetList';

// temp data passed to page component
const BUDGET_DATA = [
	{ date: '0718', data: [{desc: 'McDonalds', price: '9.99'}, {desc: 'KFC', price: '4.78'}]},
	{ date: '0818', data: [{desc: 'Chipotle', price: '12.69'}]},
	{ date: '0918', data: [{desc: 'Gas', price: '37.00'}, {desc: 'Amazon', price: '31.54'}]},
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class BudgetScreen extends Component {

	getDateCode() {
		now = new Date();
		month = now.getMonth()+1;
		if (month < 10) {
					month = "0" + month;
			}
		year = now.getFullYear().toString().substr(-2);
		return month + year;
	}


	render() {
		return (
			<BudgetList data={BUDGET_DATA} />
		);
	}

}

const styles = {
	textStyle: {
		fontSize: 30,
		color: 'black',
		textAlign: 'center',
		marginBottom: 15
	},
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
	}
};

export default BudgetScreen;