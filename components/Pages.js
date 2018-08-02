import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Pages extends Component {

	getDateCode() {
		now = new Date();
		month = now.getMonth()+1;
		if (month < 10) {
        month = "0" + month;
    }
		year = now.getFullYear().toString().substr(-2);
		console.log(month, year);
		return month + year;
	}

	renderPages() {
		return this.props.data.map((page) => {
			return (
				<View 
					style={styles.viewStyle}
					key={page.date}
				>
					<Text style={styles.textStyle}>
						{page.desc}{"\n"}
						{page.price}{"\n"}
						{this.getDateCode()}{"\n"}
					</Text>
				</View>
			);
		});
	}


	render() {
		return (
			<ScrollView
				horizontal
				pagingEnabled
				style={{ flex: 1 }}
			>
				{this.renderPages()}
			</ScrollView>

		);
	}

}

const styles = {
	textStyle: {
		fontSize: 30,
		color: 'black',
		textAlign: 'center',
		marginBottom: 15
	},
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
	}
};

export default Pages;