import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Pages from '../components/Pages';

// temp data passed to page component
const PAGE_DATA = [
	{ date: '0718', desc: 'McDonalds', price: '9.99'},
	{ date: '0818', desc: 'Chipotle', price: '12.69'},
	{ date: '0918', desc: 'Gas', price: '37.00'},
];

const SCREEN_WIDTH = Dimensions.get('window').width;


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

	renderItem = ({item}) => {
		<View 
			style={styles.viewStyle}
		>
			<Text style={styles.textStyle}>
				{item.desc}{"\n"}
				{item.price}{"\n"}
				{this.getDateCode()}{"\n"}
			</Text>
		</View>
	}

	render() {
		return (
			<FlatList
				data={PAGE_DATA}
				renderItem={ ({ item }) => (
					<View 
						style={styles.viewStyle}
					>
						<Text style={styles.textStyle}>
							{item.desc}{"\n"}
							{item.price}{"\n"}
							{this.getDateCode()}{"\n"}
						</Text>
					</View>
				)}
			  keyExtractor={ item => item.date.toString() }
			  horizontal
			  pagingEnabled={true}

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