import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class BudgetList extends Component {



	renderBudget = ({item}) => (
		<Text style={styles.textStyle}>
			{item.desc} {item.price}
		</Text>
	);

	renderItem = ({item}) => (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{item.date}{"\n"}</Text>
			<FlatList
				data={item.data}
				renderItem={this.renderBudget}
			  keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);

	getItemLayout = (data, index) => (
    { length: SCREEN_WIDTH, offset: SCREEN_WIDTH * index, index }
  );

	render() {
		return (
			<FlatList
				data={this.props.data}
				renderItem={this.renderItem}
			  keyExtractor={item => item.date.toString()}
			  horizontal
			  pagingEnabled
			  initialScrollIndex={1}
			  getItemLayout={this.getItemLayout}
			  ref={(ref) => {this.flatListRef = ref;}}
			/>
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
		width: SCREEN_WIDTH,
		marginTop: 30
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
	}
};

export default BudgetList;