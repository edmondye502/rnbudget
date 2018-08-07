import {
	BUDGET_ADD
} from '../actions/types';

export default function (state = [], action) {
	switch (action.type) {
		case BUDGET_ADD:
			return [action.payload, ...state];
		default:
			return state;
	}
}