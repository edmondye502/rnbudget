import {
	BUDGET_ADD,
	BUDGET_DELETE
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case BUDGET_ADD:
			var { sheet, budget } = action.payload;
			return { ...state, [sheet]: [budget, ...state[sheet] || [] ] };
		case BUDGET_DELETE:
			var { sheet, budget } = action.payload;
			const removeIndex = state[sheet].findIndex(function(b) {
				return b.id === budget.id;
			});
			state[sheet].splice(removeIndex, 1);
			const newBudgetList = (state[sheet].length == 0 ? undefined : state[sheet]);
			return { ...state, [sheet]: newBudgetList };
		default:
			return state;
	}
}