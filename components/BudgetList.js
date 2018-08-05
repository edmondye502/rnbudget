import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Header, Card, List, ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// temp monthly budget
const monthly_budget = 10;

class BudgetList extends Component {

	onDeleteBudgetPress = (id) => {
		console.log('delete budget ' + id);
	}

	renderBudget = ({item}) => (
		<ListItem
			key={item.desc}
			title={item.desc}
      rightTitle={item.price}
      rightIcon={{name: 'delete'}}
      onPressRightIcon={() => this.onDeleteBudgetPress(item.desc)}
		/>
	);

	renderItem = ({item}) => (
		<View style={styles.viewStyle}>
			<Header
				centerComponent={{ text: item.date, style: styles.headerStyle }}
			/>
				<FlatList
					data={item.data}
					renderItem={this.renderBudget}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
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
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				getItemLayout={this.getItemLayout}
				initialScrollIndex={1}
				ref={(ref) => {this.flatListRef = ref;}}
			/>
		);
	}

}

const styles = {
	textStyle: {
		color: 'black',
		textAlign: 'center',
		marginBottom: 15
	},
	viewStyle: {
		flex: 1,
		width: SCREEN_WIDTH,
	},
	headerStyle: {
		color: '#fff',
		fontSize: 25,
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
	}
};

export default BudgetList;