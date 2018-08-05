import {
	BUDGET_ADD
} from '../actions/types';

const INITIAL_STATE = {
	description: '',
	price: ''
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case BUDGET_ADD:
			return INITIAL_STATE;
		default:
			return state;
	}
}