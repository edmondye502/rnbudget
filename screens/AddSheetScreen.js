import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Header, Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import BudgetHeader from '../components/BudgetHeader';

import * as actions from '../actions'

var TEMP_ID = 1;

class AddSheetScreen extends Component {

	componentDidMount() {
		this.props.sheetFormClear();
	}

	onBackPress = () => {
		this.props.navigation.navigate('budget');
	}

	onAddButtonPress = () => {
		const sheet = {
			id: TEMP_ID,
			name: this.props.newSheet.sheetName,
		};
		TEMP_ID++;

		this.props.setCurrentSheet(sheet);
		this.props.sheetAdd(sheet, () => {
			this.props.navigation.navigate('budget');
		});
	}

	renderHeaderComponent() {
		return (
			<Text>Add Budget Sheet</Text>
		);
	}

	renderError() {
		if (this.props.newSheet.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.newSheet.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		return (
			<View>
				<BudgetHeader 
					leftIcon={{type: 'arrow-back', display: (this.props.sheets.length > 0), press: this.onBackPress}}
					centerComponent={{type: 'text', text: 'Add Budget Sheet'}}
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
						{this.renderError()}
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
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		marginBottom: 10,
		color: 'red'
	},
};

function mapStateToProps(state) {
	return { 
		sheets: state.sheets,
		newSheet: state.newSheet
	};
}

export default connect(mapStateToProps, actions)(AddSheetScreen);