import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, TextInput } from 'react-native';
import { Header, Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions'

class NewBudgetSheet extends Component {

	onButtonPress = () => {
		this.props.sheetAdd(this.props.sheetName, () => {
			// navigate to budget
			this.props.navigation.navigate('budget');
		});
	}

	render() {
		return (
				<Card>
				<View style={styles.containerStyle}>
					<Text style={styles.labelStyle}>Sheet Name</Text>
					<TextInput
						autoCorrect={true}
						style={styles.inputStyle}
						value={this.props.sheetName}
						onChangeText={value => this.props.sheetFormUpdate({ prop: 'sheetName', value })}
					/>
					<Button
					  raised
					  icon={{name: 'add'}}
					  title='Add Sheet'
					  backgroundColor='#009688'
					  onPress={() => this.onButtonPress()}
					/>
				</View>
				</Card>
		);
	}

}

const styles = {
	headerStyle: {
		color: '#fff',
		fontSize: 25,
	},
	inputStyle: {
		margin: 20,
    height: 40,
    fontSize: 20,
	},
	labelStyle: {
		fontSize: 20,
		paddingLeft: 20,
	},
	containerStyle: {
		marginTop: 10,
		marginBottom: 10,
	},
};

export default connect(null, actions)(NewBudgetSheet);