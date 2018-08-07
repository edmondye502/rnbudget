import {
	BUDGET_ADD
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case BUDGET_ADD:
			const { sheet, budget } = action.payload;
			return { ...state, [sheet]: [budget, ...state[sheet] || [] ] };
		default:
			return state;
	}
}