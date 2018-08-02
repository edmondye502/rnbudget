import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Pages from '../components/Pages';

// temp data passed to page component
const PAGE_DATA = [
	{ date: '0718', data: [{desc: 'McDonalds', price: '9.99'}, {desc: 'KFC', price: '4.78'}]},
	{ date: '0818', data: [{desc: 'Chipotle', price: '12.69'}]},
	{ date: '0918', data: [{desc: 'Gas', price: '37.00'}, {desc: 'Amazon', price: '31.54'}]},
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class BudgetScreen extends Component {

	componentDidMount() {

	}

	getDateCode() {
		now = new Date();
		month = now.getMonth()+1;
		if (month < 10) {
					month = "0" + month;
			}
		year = now.getFullYear().toString().substr(-2);
		return month + year;
	}


	renderBudget = ({item}) => (
		<Text style={styles.textStyle}>
			{item.desc}
			{item.price}
		</Text>
	);

	renderItem = ({item}) => (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{item.date}{"\n"}</Text>
			<FlatList
				data={item.data}
				renderItem={this.renderBudget}
			  keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);

	render() {
		return (
			<FlatList
				data={PAGE_DATA}
				renderItem={this.renderItem}
			  keyExtractor={item => item.date.toString()}
			  horizontal
			  pagingEnabled

			/>
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