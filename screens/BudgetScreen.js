import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Header, Card, List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import BudgetList from '../components/BudgetList';

// temp data passed to page component
const BUDGET_DATA = [
	{ date: '0718', 
		data: [{desc: 'McDonalds', price: '9.99'}, {desc: 'KFC', price: '4.78'}]},
	{ date: '0818', 
		data: [{desc: 'Chipotle', price: '12.69'}, {desc: 'Shoes', price: '122.19'}, {desc: 'Poke', price: '14.59'}]},
	{ date: '0918', 
		data: [{desc: 'Gas', price: '37.00'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}]},
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class BudgetScreen extends Component {


  onAddSheetPress = () => {
		this.props.navigation.navigate('add');
	}

	componentDidMount() {
		console.log(this.props.sheets.length);
		if(this.props.sheets.length <= 0) {
			this.props.navigation.navigate('add');
		}

	}

	render() {
		return (
			<View>
				<Header
				  centerComponent={{ text: 'Sheet Name', style: { color: '#fff' } }}
				  leftComponent={{ icon: 'add', color: '#fff', onPress: this.onAddSheetPress }}
				/>
				<Text>Budget Screen</Text>
			</View>
		)	
	}

}

const styles = {
	textStyle: {
		color: 'black',
		textAlign: 'center',
		marginBottom: 15
	},
	viewStyle: {
		flex: 1,
		width: SCREEN_WIDTH,
	},
	headerStyle: {
		color: '#fff',
		fontSize: 25,
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
	}
};

function mapStateToProps(state) {
	return { sheets: state.sheets };
}

export default connect(mapStateToProps)(BudgetScreen);