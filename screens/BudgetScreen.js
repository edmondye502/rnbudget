import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Picker } from 'react-native';
import { Header, Card, List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import BudgetList from '../components/BudgetList';
import BudgetHeader from '../components/BudgetHeader';
import SheetPicker from '../components/SheetPicker';

// temp data passed to page component
const BUDGET_DATA = [
	{ date: '0718', 
		data: [{desc: 'McDonalds', price: '9.99'}, {desc: 'KFC', price: '4.78'}]},
	{ date: '0818', 
		data: [{desc: 'Chipotle', price: '12.69'}, {desc: 'Shoes', price: '122.19'}, {desc: 'Poke', price: '14.59'}]},
	{ date: '0918', 
		data: [{desc: 'Gas', price: '37.00'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}, {desc: 'Amazon', price: '31.54'}]},
];

class BudgetScreen extends Component {

  onAddSheetPress = () => {
		this.props.navigation.navigate('add');
	}

	componentDidMount() {
		if(this.props.sheets.length <= 0) {
			this.props.navigation.navigate('add');
		}
	}



	render() {
		return (
			<View>
				<BudgetHeader 
					leftIcon={{type: 'add', display: true, press: this.onAddSheetPress}}
					centerComponent={{type: 'text', text: this.props.currentSheet.name}}
				/>
				<SheetPicker />
				<BudgetList />
			</View>
		)
	}
}

function mapStateToProps(state) {
	return { 
		sheets: state.sheets,
		currentSheet: state.currentSheet
	};
}

export default connect(mapStateToProps)(BudgetScreen);