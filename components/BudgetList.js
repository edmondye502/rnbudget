import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Dimensions, ScrollView } from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements'
import { connect } from 'react-redux';

import * as actions from '../actions'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class BudgetList extends Component {

	onAddButtonPress() {
		const budget = {
			desc: this.props.newBudget.budgetDesc,
			price: this.props.newBudget.budgetPrice
		};

		this.props.budgetAdd(this.props.currentSheet.id, budget);
		this.props.budgetClear();
	}

	renderBudgetList() {
		if(!this.props.budgets[this.props.currentSheet.id]) {
			return <Text>Add new budget</Text>
		}
		return (
			<FlatList
	      data={this.props.budgets[this.props.currentSheet.id]}
	      renderItem={this.renderItem}
	      keyExtractor={(item, index) => index}
	    />
	  );
	}

	renderItem = ({ item }) => (
	  <ListItem
	    title={item.desc}
	    subtitle={item.price}
	  />
	)

	render() {
		return (
			<View style={styles.containerStyle}>
				<View style={styles.footerStyle}>
					<View style={styles.formStyle}>
						<TextInput 
							autoCorrect={false}
							placeholder='Description'
							style={styles.descInputStyle}
							value={this.props.budgetDesc}
							onChangeText={value => this.props.budgetFormUpdate({ prop: 'budgetDesc', value })}
						/>
						<TextInput
							autoCorrect={false}
							keyboardType='numeric'
							placeholder='Price'
							style={styles.priceInputStyle}
							value={this.props.budgetPrice}
							onChangeText={value => this.props.budgetFormUpdate({ prop: 'budgetPrice', value })}
						/>
						<Icon
						  style={styles.buttonStyle}
						  name='add'
						  onPress={() => this.onAddButtonPress()}
						/>
					</View>
				</View>
				<View style={styles.budgetListStyle}>
					{this.renderBudgetList()}
				</View>

				
				
				
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		justifyContent: 'space-between'
	},
	budgetListStyle: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT - 150
	},
	footerStyle: {
		width: SCREEN_WIDTH,
		height: 50
	},
	descInputStyle: {
		flex: 3,
	},
	priceInputStyle: {
		flex: 2,
	},
	buttonStyle: {
		flex: 1,
	},
	formStyle: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: 0.5,
    borderColor: '#d6d7da',
	}
};

function mapStateToProps(state) {
	return { 
		currentSheet: state.currentSheet,
		budgets: state.budgets,
		newBudget: state.newBudget
	};
}

export default connect(mapStateToProps, actions)(BudgetList);