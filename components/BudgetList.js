import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';


class BudgetList extends Component {

	renderBudgetList() {

	}

	render() {
		return (
			<View>
			<View>
				<FlatList
				/>
			</View>
			<View style={styles.containerStyle}>
				<TextInput
					autoCorrect={true}
					placeholder='Description'
					style={styles.descInputStyle}
					//value={this.props.sheetName}
					//onChangeText={value => this.props.sheetFormUpdate({ prop: 'sheetName', value })}
				/>
				<TextInput
					autoCorrect={true}
					placeholder='Price'
					style={styles.priceInputStyle}
					//value={this.props.sheetName}
					//onChangeText={value => this.props.sheetFormUpdate({ prop: 'sheetName', value })}
				/>
				<Button
				  style={styles.buttonStyle}
				  title='+'
				  onPress={() => this.onAddButtonPress()}
				/>
			</View>
			</View>
		);
	}
}

const styles = {
	descInputStyle: {
		flex: 3,
		margin: 20,
	},
	priceInputStyle: {
		flex: 2,
		margin: 20,
	},
	buttonStyle: {
		flex: 1
	},
	containerStyle: {
		flexDirection: 'row'
	},
};

function mapStateToProps(state) {
	return { 
		currentSheet: state.currentSheet,
		budgets: state.budgets
	};
}

export default connect(mapStateToProps)(BudgetList);