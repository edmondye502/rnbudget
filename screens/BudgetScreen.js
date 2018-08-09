import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Picker } from 'react-native';
import { Header, Card, List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import BudgetList from '../components/BudgetList';
import BudgetHeader from '../components/BudgetHeader';

import * as actions from '../actions'

class BudgetScreen extends Component {

  onAddSheetPress = () => {
		this.props.navigation.navigate('add');
	}

	onDeleteSheetPress = () => {
		this.props.sheetDelete(this.props.currentSheet);
		if (this.props.sheets.length > 0) {
			this.props.setCurrentSheet(this.props.sheets[0]);
		}
		else {
			this.props.navigation.navigate('add');
		}
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
					centerComponent={{type: 'picker'}}
					rightIcon={{type: 'delete', display: true, press: this.onDeleteSheetPress}}
				/>
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

export default connect(mapStateToProps, actions)(BudgetScreen);