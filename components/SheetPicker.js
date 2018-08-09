import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions'

class SheetPicker extends Component {

	onSheetChange = (value) => {
		var changeSheet = this.props.sheets.find(function(sheet) {
			return sheet.id === value;
		});

		this.props.setCurrentSheet(changeSheet);
	}

	renderPickerItems() {
		if(this.props.sheets.length > 0)
		{
			return this.props.sheets.map(sheet => {
				return (
					<Picker.Item key={sheet.id} label={sheet.name} value={sheet.id} />
				);
			});
		}
	}

	render() {
		return (
			<Picker
				selectedValue={this.props.currentSheet.id}
				style={[this.props.style, styles.pickerStyle]}
				itemStyle={styles.itemStyle}
				onValueChange={this.onSheetChange}
			>
				{this.renderPickerItems()}
			</Picker>
		);
	}
}


const styles = {
	pickerStyle: {
		height: 50,
		width: 100
	},
};

function mapStateToProps(state) {
	return { 
		currentSheet: state.currentSheet,
		sheets: state.sheets,
	};
}

export default connect(mapStateToProps, actions)(SheetPicker);