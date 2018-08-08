import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Dimensions, ScrollView, Keyboard } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements'
import { connect } from 'react-redux';

import * as actions from '../actions'


class BudgetHeader extends Component {

	renderLeftIcon() {
		if(this.props.leftIcon.display) {
			return (
				<Icon
				  name={this.props.leftIcon.type}
				  style={styles.iconStyle}
				  onPress={this.props.leftIcon.press} 
				/>
			);
		}
	}

	render() {
		return (
			<View style={styles.viewStyle}>
				{this.renderLeftIcon()}
				<Text style={styles.textStyle}>{this.props.centerText}</Text>
			</View>
		);
	}
}


const styles = {
	viewStyle: {
		backgroundColor: '#008080',
		flexDirection: 'row',
		alignItems: 'center',
		height: 75,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	iconStyle: {
		flex: 1,
		textAlign: 'left',
	},
	textStyle: {
		flex: 1,
		textAlign: 'center',
		fontSize: 25
	}
};

function mapStateToProps(state) {
	return { 
		currentSheet: state.currentSheet,
		budgets: state.budgets,
	};
}

export default connect(mapStateToProps, actions)(BudgetHeader);