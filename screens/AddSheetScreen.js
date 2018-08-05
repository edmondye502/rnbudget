import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Header, Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions'

var TEMP_ID = 1;

class AddSheetScreen extends Component {

	onBackPress = () => {
		this.props.navigation.navigate('budget');
	}

	onAddButtonPress = () => {
		const sheet = {
			id: TEMP_ID,
			name: this.props.sheetName
		};
		TEMP_ID++;

		this.props.sheetAdd(sheet, () => {
			// navigate to budget
			this.props.navigation.navigate('budget');
		});
	}

	renderBackButton() {
		if(this.props.sheets.length > 0) {
			return (
				<Icon
				  name='arrow-back'
				  onPress={() => this.onBackPress()} 
				/>
			)
		}
	}

	render() {
		return (
			<View>
				<Header
				  leftComponent={this.renderBackButton()}
				  centerComponent={{ text: 'Add Budget Sheet', style: { color: '#fff' } }}
				/>
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
						  onPress={() => this.onAddButtonPress()}
						/>
					</View>
				</Card>
			</View>
		)
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

function mapStateToProps(state) {
	return { sheets: state.sheets };
}

export default connect(mapStateToProps, actions)(AddSheetScreen);